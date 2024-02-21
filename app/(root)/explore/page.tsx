import React from "react";
import RightPanel from "@/components/right-panel";
import LeftPanel from "@/components/left-panel";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <LeftPanel />

      <div
        className="relative  z-20 flex h-full
        w-full flex-col gap-6 px-1  
        md:px-3 xl:flex-row xl:gap-12 "
      >
        <RightPanel />
      </div>

      <div
        className="relative flex  min-h-screen w-full  items-start justify-start bg-people   bg-cover bg-center  font-poppins 
       md:mb-5  md:h-full  
      md:items-center md:justify-center  "
     
      >
        <h1
          className="absolute left-3  top-10  mr-5 text-center  font-rubik  text-[2.2rem] font-bold  md:left-5  md:top-[6rem] md:mb-10  
          md:mr-0 md:text-[4rem]  "
        >
          For Developers
        </h1>

        <h1
          className="absolute left-3 top-[4.5rem] mt-6 text-center font-rubik text-[2rem]   font-bold  md:left-5 md:top-[10rem] 
          md:mt-10 md:text-[4rem]"
        >
          By Developers
          <Link
            href="/https://loom-resources.vercel.app/"
            className="mt-6 flex justify-start max-sm:w-full"
          >
            <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
              Visit LearingLoom
            </Button>
          </Link>
        </h1>

        {/* <h1
          className="absolute md:mb-14  bg-red-500 md:top-[6rem]  mr-10  top-10  text-center  font-lexend text-[2rem]  
          font-bold md:text-6xl  "
        >
          For Developers
        </h1>






        <h1
          className="absolute left-0 md:left-0 mt-8 top-10   text-center  font-lexend text-[2rem] 
          font-bold md:text-6xl"
        >
          By Developers

          <Link href="/ask-question" className="flex mt-6 justify-start max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
          Visit LearingLoom
          </Button>
        </Link>


        </h1> */}
      </div>
    </div>
  );
};

export default page;

// <div
// className=" flex min-h-[400px] w-full
// items-center  justify-start bg-people  bg-cover  bg-center
// font-poppins "
// >
// <h1
//   className="mt-2 text-center font-lexend  text-[1.8rem] font-bold
//   md:text-start md:text-4xl"
// >
//   Loom for Developers
// </h1>

// <p>
//   Discover a wealth of tech resources. Showcase and collaborate with
//   fellow developers on Learning Loom
// </p>
// </div>
