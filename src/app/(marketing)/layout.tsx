import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

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
