import { UserProgress } from '@/components/userProgress'
import { FeedWrapper } from '../feedWrapper'
import { Header } from '../header'
import { StickyWrapper } from '../stickyWrapper'
import { getUserProgress } from '~/db/queries'
import { redirect } from 'next/navigation'

const Learn = async () => {
  const userProgress = await getUserProgress()

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses')
  }

  return (
    <div className="flex gap-[40px] px-6">
      <FeedWrapper>
        <div className="bg-white mb-4 sticky top-[50px]  lg:top-0 pt-[24px] mt-[-24px]">
          <Header title={userProgress.activeCourse.title} />
        </div>
        <div className="h-[400px] mb-2 bg-gray-400" />
        <div className="h-[400px] mb-2 bg-gray-400" />
        <div className="h-[400px] mb-2 bg-gray-400" />
        <div className="h-[400px] mb-2 bg-gray-400" />
        <div className="h-[400px] mb-2 bg-gray-400" />
        <div className="h-[400px] mb-2 bg-gray-400" />
        <div className="h-[400px] mb-2 bg-gray-400" />
        <div className="h-[400px] mb-2 bg-gray-400" />
        <div className="h-[400px] mb-2 bg-gray-400" />
        <div className="h-[400px] mb-2 bg-gray-400" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress activeCourse={userProgress.activeCourse} points={userProgress.points} hearts={userProgress.hearts} hasActiveSubscription={false} />
      </StickyWrapper>
    </div>
  )
}

export default Learn
