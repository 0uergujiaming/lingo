import { Sidebar } from '@/components/sidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

interface Props {
  className?: string
}

export const MobileHeader = ({ className }: Props) => {
  return (
    <nav className={cn('bg-green-500 h-[50px] w-full flex items-center px-6', className)}>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent className="p-0" side="left">
          <Sidebar className="pt-8" />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
