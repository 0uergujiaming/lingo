import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { SidebarItem } from './sidebarItem'

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn('h-full w-full px-4 py-5', className)}>
      <Logo />
      <div className="mt-4 flex flex-col gap-y-3">
        <SidebarItem title="learn" icon="/shop.svg" path="/learn" />
        <SidebarItem title="learn" icon="/shop.svg" path="/learn" />
        <SidebarItem title="learn" icon="/shop.svg" path="/learn" />
        <SidebarItem title="learn" icon="/shop.svg" path="/learn" />
      </div>
    </div>
  )
}
