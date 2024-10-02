'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  title: string
  icon: string
  path: string
}

export const SidebarItem = ({ title, icon, path }: Props) => {
  const pathName = usePathname()

  return (
    <Button asChild className="w-full justify-start" variant={path === pathName ? 'sidebarOutline' : 'sidebar'}>
      <Link href={path}>
        <Image src={icon} alt={title} width={20} height={20} className="mr-2" />
        {title}
      </Link>
    </Button>
  )
}
