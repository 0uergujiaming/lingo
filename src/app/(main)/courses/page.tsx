import { cache } from 'react'
import { getCourses, getUserProgress } from '~/db/queries'
import { List } from './list'

const Courses = cache(async () => {
  const courses = await getCourses()
  const userProgress = await getUserProgress()

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-wide text-neutral-700 mb-2">Language Courses</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  )
})

export default Courses
