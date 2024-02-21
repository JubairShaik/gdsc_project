/* eslint-disable tailwindcss/classnames-order */

import { SearchParamsProps } from "@/types";
import Testimonials from "@/components/Carousel";
import Top from "@/components/Top";

import Link from 'next/link';
import { FaUserTie } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import Todayspick from "@/components/Todayspick";
import type { Metadata } from "next";
// import Todayspick from '@/components/shared/Todayspick';

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

// export default async function Home({ searchParams }: SearchParamsProps) {

//   const result = await getQuestions({
//     page: searchParams.page ? +searchParams.page : 1,
//     filter: searchParams.filter,
//     searchQuery: searchParams.q,
//   });

// but sooner or later

export default async function Home({ searchParams }: SearchParamsProps) {


  return (
    // <section className="mt-6 md:mt-2 ">
    //     {/* INSYNC */}

    //     <Hero/>
    // </section>

    <main className="min-h-screen">
      {/* <Top title={"Home"} /> */}
      <section className="px-6  py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-6/12  py-5">
            <h1 className="text-7xl font-sora  leading-[84px] font-bold">
              <span className=" text-[#5169F6]">InSync</span>: Where Freelancers
              and Opportunities Align
            </h1>
            <p className="text-xl mt-7 opacity-80">
              Enhance freelancing with InSync: Seamless connections,
              <br /> remote success, guided path.
            </p>
            <button className="px-7 py-3 bg-[#5169F6] text-white text-xl rounded-md mt-5">
              Explore Now
            </button>
          </div>
          <div className="mx-auto w-full lg:w-6/12 p-2 xl:p-20">
            <Testimonials />
          </div>
        </div>
        <Todayspick />
        <div className="py-20 mt-0 flex gap-20">
          <div
            className="w-6/12 rounded-xl text-center pb-20"
            style={{
              boxShadow:
                "0 0px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="h-48 bg-rose-500 rounded-t-xl"></div>
            <div className="w-36 h-36 rounded-full border-[#F4B400] border-4 mx-auto bg-white flex items-center justify-center text-6xl -mt-20">
              <FaUserGraduate />
            </div>
            <div>
              <h1 className="text-5xl font-bold mt-6">Looking For Job</h1>
              <p className="mt-4 opacity-70 px-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="px-7 py-3 bg-[#5169F6] text-white text-xl rounded-md mt-5">
                Explore Now
              </button>
            </div>
          </div>
          <div
            className="w-6/12 rounded-xl text-center"
            style={{
              boxShadow:
                "0 0px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="h-48 bg-rose-500 rounded-t-xl"></div>
            <div className="w-36 h-36 rounded-full border-green-500 border-4 mx-auto bg-white flex items-center justify-center text-6xl -mt-20">
              <FaUserTie />
            </div>
            <div>
              <h1 className="text-5xl font-bold mt-6">Looking For Talent</h1>
              <p className="mt-4 opacity-70 px-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>


              <Link href={`/community`} >
                <button className="px-7 py-3 bg-[#5169F6] text-white text-xl rounded-md mt-5">
                  Explore Now
                </button>
              </Link>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
