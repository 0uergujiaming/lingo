import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { courses } from '~/db/schema'

interface Props {
  course: typeof courses.$inferSelect
  active?: boolean
  disabled?: boolean
  onClick: (id: number) => void
}

export const Card = ({ course, active, disabled, onClick }: Props) => {
  return (
    <div
      className={cn(
        'border-2 border-b-4 rounded-xl min-w-[200px] min-h-[217px] p-2 pb-6 hover:bg-black/5 cursor-pointer hover:border-b-2 flex flex-col items-center justify-between',
        disabled && 'pointer-events-none opacity-50'
      )}
      onClick={() => {
        if (disabled) return
        onClick(course.id)
      }}
    >
      <div className="min-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[4] h-4 w-4" />
          </div>
        )}
      </div>
      <Image src={course.imageSrc} alt={course.title} height={70} width={93.33} className="rounded-lg drop-shadow-md border object-cover" />
      <p className="text-neutral-700 text-center font-bold mt-3">{course.title}</p>
    </div>
  )
}
