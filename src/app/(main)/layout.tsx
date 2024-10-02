import React from 'react'
import { MobileHeader } from './mobileHeader'
import { Sidebar } from '@/components/sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Sidebar className='fixed left-0 top-0 hidden lg:block w-[300px] border-r-2' />
      <MobileHeader className='fixed top-0 z-50 lg:hidden' />
      <div className="h-full lg:pl-[300px] pt-[40px] lg:pt-0">
        <main className="h-full pt-6 max-w-[998px] mx-auto">{children}</main>
      </div>
    </>
  )
}

export default MainLayout
