"use client"

import React from 'react'

import { useTheme } from '@/context/ThemeProvider';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image';
import { themes } from '@/constants';

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative  border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer
         focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200
          dark:data-[state=open]:bg-transparent ">
          {mode === 'light' ? (
            <Image 
            src="/assets/icons/sun.svg" alt="sun" 
            width={25} 
            height={25} className="active-theme" 
            />
          ): (
          <Image 
          src="/assets/icons/moon.svg" alt="moon"
           width={25} 
           height={25} className="active-theme" 
           />
           )}
        </MenubarTrigger>
 
 
        
        <MenubarContent className="absolute right-[-1.69rem] mt-5 min-w-[220px] rounded-[24px] border  bg-light-900 p-4 py-2
     font-poppins dark:border-[#1d2121] dark:bg-slate-900 md:right-[-3rem] md:min-w-[260px] md:p-5 " >

          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex items-center gap-4 rounded-[14px]  p-3  dark:focus:bg-dark-400  md:p-4"
              onClick={() => {
                setMode(item.value)

                if(item.value !== 'system') {
                  localStorage.theme = item.value
                } else {
                  localStorage.removeItem('theme');
                }
              }}
            >
              <Image 
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${mode === item.value && 'active-theme'}`}
              />
              <p className={`body-semibold text-light-500 ${mode === item.value ? 'text-primary-500' : 'text-dark100_light900'}`}>{item.label}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme