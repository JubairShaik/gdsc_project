"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { SignedOut, useAuth, SignedIn } from "@clerk/nextjs";

const LeftSidebar = () => {
  const { userId } = useAuth();

  const pathname = usePathname();

  return (
    // background-light900_dark200
    <section
      className=" light-border
    custom-scrollbar sticky left-0 top-0  flex h-screen flex-col
     justify-between   overflow-y-auto pt-[6rem] 
    dark:shadow-none max-sm:hidden lg:w-[270px]"
    >
      <div
        className="m-4 flex w-auto flex-1 flex-col justify-between 
      gap-1 rounded-[20px]  bg-[#f9f9f9] p-4 dark:bg-[#252930]"
      >
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          // TODO
          if (item.route === "/profile") {
            if (userId) {
              item.route = `${item.route}/${userId}`;
            }
          }

          return (
            <Link
              href={item.route}
              key={item.label}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg  text-light-900"
                  : "text-dark300_light900"
              }  flex items-center justify-start gap-2 rounded-lg  bg-transparent p-2
              font-rubik hover:bg-slate-200  dark:hover:bg-[#1d2127]`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "font-bold" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive
                    ? " text-[15px] font-medium  leading-[25.2px] tracking-normal md:text-[18px] md:font-medium "
                    : "text-[14px] font-normal  leading-[25.2px] md:text-[17px] md:font-normal"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}

        <SignedIn>
          <Link
            href="/ask-question"
            className=" primary-gradient mt-3 hidden justify-center  rounded-[13px] p-3 font-rubik text-[0.96rem] font-semibold text-slate-100 max-sm:w-full lg:flex"
          >
            Revolutionizing freelance Collabration Connecting skilled Professionals
          </Link>
        </SignedIn>
      </div>

      <SignedOut>
        <div className="mx-4 mb-4 flex max-w-[235px] flex-col  justify-center gap-3 p-1 ">
          <Link href="/sign-in">
            <Button
              className="small-medium btn-secondary 
                min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
            >
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
