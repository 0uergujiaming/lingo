import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full flex flex-col overflow-hidden'>
      <Header />
      <main className='flex-1 overflow-y-auto flex'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
