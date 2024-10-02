import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <div className="bg-white flex justify-between items-center relative text-muted-foreground">
      <Link href="/courses">
        <Button size="sm" variant="ghost">
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </Link>
      <div className="font-bold text-sm tracking-wide absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">{title}</div>
    </div>
  )
}
