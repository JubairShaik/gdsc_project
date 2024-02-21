"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
 

const LeftPanel = () => {
  return (
    
    <div
      className="flex flex-col  justify-betwee rounded-[18px] md:mx-4  bg-white dark:bg-[#0A0A0A] py-3 md:py-5  xl:h-full xl:py-10"
    >
      {/* Top Container */}
      <div className="flex  md:flex-row flex-col justify-center  items-center" >
        <div>
          <Image
            priority
            loading="eager"
            alt="avatar"
            placeholder="blur"
            src="/github2.png"
            width={150}
            height={150}
            className="rounded-full"
            blurDataURL="/profile.jpg"
          />
        </div>

        {/* Text Container */}
        <div className="mt-4 md:mt-5">
          <div className="text-xl font-medium text-center md:text-start text-slate-800 dark:text-blue-500">
            {siteConfig.title}
          </div>


          <h1 className="mt-2 font-lexend text-[1.8rem]  text-center md:text-start    font-bold md:text-4xl">{siteConfig.creator}</h1>
          <p className="md:text-[18px] text-[16px]  text-center md:text-start  my-1 max-w-[600px] w-full  font-light text-neutral-500">
            {siteConfig.bio}
          </p>
          
        </div>
        {/* Buttons Container */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={`${siteConfig.locationLink}`}
            className="flex w-full items-center gap-2 rounded-md border border-neutral-100 px-4 py-2 text-sm font-medium dark:border-neutral-800"
          >
            <MapPin size="14" />
            {siteConfig.location}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex w-full items-center gap-2 rounded-md border border-neutral-100 px-4 py-2 text-sm font-medium dark:border-neutral-800"
          >
            <Mail size="14" />
            Contact
          </a>
        </div>
        {/* Footer */}
        {/* <div className="hidden mt-6 xl:flex">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default LeftPanel;
