import React  from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Header } from './Header';
export const Layout = () => {
  return (
    <div>
      <Header/>
      <main className="px-2 py-2 max-w-6xl m-auto min-w-[700px]">
         <Navbar/>
         <div className="pt-16">
          <Outlet/>
        </div>
      </main>
    </div>
  )
}
