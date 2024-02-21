'use client';

 
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import classes from '@/styles/index.module.css';
import clsx from 'clsx';
import { noHeaderFooterUrls } from '@/constants';





const Nav = ({ className, children }: { className?: string; children: ReactNode }) => {
  const pathname = usePathname();

  if (!noHeaderFooterUrls.includes(pathname)) {
    return null; // Hide the component if the condition is not met
  }


  return (
    <div className={clsx(classes.customstyles)}>
    {children}
  </div>
  );
};

export default Nav;

// `custom-scrollbar sticky right-0 top-0 m-5  h-screen w-[340px] flex-col overflow-y-auto rounded-[20px] bg-[#f7f7f7] pl-6 pt-[6rem] dark:bg-[#1d2127] dark:shadow-none   max-xl:hidden `