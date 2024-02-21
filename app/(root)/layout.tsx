import React from "react";

import "../globals.css";

import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
// import RightSidebar from "@/components/shared/RightSidebar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Insync - For Developers By Developers ",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/assets/images/dev-loom.svg",
  },

  other: {
    "theme-color": "#f67d1e",
    "color-scheme": "dark only",

    "twitter:image": "https://i.ibb.co/9vDC2jN/Thumbnail.jpg",
    "twitter:card": "summary_large_image",

    "og:url": "https://dev-loom.vercel.app/",
    "og:image": "https://i.ibb.co/9vDC2jN/Thumbnail.jpg",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" relative bg-[#f3f3f3]  font-poppins dark:bg-[#1d2127]">
      <Navbar />

      <div className="flex">
        <LeftSidebar />

        <section
          className="flex min-h-screen w-full flex-1 flex-col items-center
        justify-start  rounded-[20px]  pt-[4.5rem] md:pt-[6.6rem]"
        >
          <div
            className=" mx-auto w-full max-w-[86rem] px-3
            md:mx-3  md:mt-[6.4̥rem] 
            md:rounded-[20px] md:p-5 "
          >
            {/* dark:bg-[#252930] */}
            {children}
          </div>
        </section>

        {/* <RightSidebar /> */}
      </div>
      <Toaster />
    </main>
  );
}
