import React from 'react'

import "../globals.css";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center 
     justify-center  bg-auth-light  bg-cover 
      bg-center font-poppins dark:bg-auth-dark ">
      {children}
    </main>
  )
}

export default Layout