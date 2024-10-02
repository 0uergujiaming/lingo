'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import db from '~/db/drizzle'
import { getCourseById, getUserProgress } from '~/db/queries'
import { userProgress } from '~/db/schema'

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId || !user) {
    throw new Error('Unauthorized')
  }

  const course = await getCourseById(courseId)

  if (!course) {
    throw new Error('Course Not Found')
  }

  const existingUserProgress = await getUserProgress()

  if (existingUserProgress) {
    await db
      .update(userProgress)
      .set({
        activeCourseId: courseId,
        userImageSrc: user.imageUrl || '/mascot.svg',
        userName: user.username || 'User',
      })
      .where(eq(userProgress.userId, userId))
  } else {
    await db.insert(userProgress).values({
      userId,
      userImageSrc: user.imageUrl || '/mascot.svg',
      userName: user.username || 'User',
      activeCourseId: courseId,
    })
  }
  revalidatePath('/learn')
  revalidatePath('/courses')
  redirect('/learn')
}
