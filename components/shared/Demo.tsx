'use client';

import { usePathname } from 'next/navigation'
import React from 'react'
import { noHeaderFooterUrls } from '@/constants'

// import RightSidebar from "@/components/shared/RightSidebar";

import classes from '@/styles/index.module.css'


const Demo = () => {

    const pathname = usePathname()

  return (
    <div
    className={[ classes.header , noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      THIS ONE IS A USE DEMO 

      {/* <RightSidebar/> */}
    </div>
  )
}

export default Demo
