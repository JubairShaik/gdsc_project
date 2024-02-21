import { SignedIn, UserButton } from "@clerk/nextjs";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    // background-light900_dark200
    <nav
      className="flex-between  fixed
    z-50 w-full gap-5 border-b border-slate-300
     bg-white p-4 shadow-light-300 dark:border-slate-800
       dark:bg-[#1d2121]  dark:shadow-none sm:px-12 
       md:rounded-b-[30px]  md:border-none  md:p-5"
    >
      <Link href="/" className="flex items-center gap-1">
        {/* <Image src="/light-logo.svg" width={40} height={40} alt="Insync" /> */}

        <p
          className="h2-bold ml-4  font-sora
         text-dark-100  dark:text-light-900  max-sm:hidden"
        >
          In
          <span className="font-sora text-primary-500">Sync</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
