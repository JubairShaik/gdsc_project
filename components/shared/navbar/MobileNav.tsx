// "use client";

// import {
//   Sheet,
//   SheetContent,
//   SheetClose,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import Image from "next/image";
// import Link from "next/link";
// // import MobileProfile from "@/components/cards/mobileProfile"
// import { Button } from "@/components/ui/button";
// import { sidebarLinks } from "@/constants";
// import { SignedOut , SignedIn } from "@clerk/nextjs";

// import { usePathname } from "next/navigation";

// const NavContent = () => {
//   const pathname = usePathname();

//   return (
//     <section className="flex h-full border-none justify-end flex-col gap-2 pt-3">

//       {sidebarLinks.map((item) => {
//         const isActive =
//           (pathname.includes(item.route) && item.route.length > 1) ||
//           pathname === item.route;

//         // TODO

//         return (
//           <SheetClose asChild key={item.route}>
//             <Link
//               href={item.route}
//               className={`${
//                 isActive
//                   ? "primary-gradient rounded-lg text-light-900"
//                   : "text-dark300_light900"
//               } flex items-center justify-start gap-2 my-1 bg-transparent p-2 rubi `}
//             >
//               <Image
//                 src={item.imgURL}
//                 alt={item.label}
//                 width={22}
//                 height={22}
//                 className={`${isActive ? "" : "invert-colors"}`}
//               />
//               <p className={`${isActive ? "base-bold" : "base-medium"}`}>
//                 {item.label}
//               </p>
//             </Link>
//           </SheetClose>
//         );
//       })}
//     </section>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Image
//           src="/assets/icons/hamburger.svg"
//           width={33}
//           height={33}
//           alt="Menu"
//           className="invert-colors sm:hidden"
//         />
//       </SheetTrigger>

//       <SheetContent
//         side="left"
//         className="background-light900_dark200  border-none"
//         // className="bg-red-500 border-tr-lg  pr-10"
//       >
//         <Link href="/" className="flex items-center gap-1">
//         <Image
//           src="/light-logo.svg"
//           width={30 }
//           height={30}
//           alt="Insync"
//         />

//           <p className="h2-bold text-dark100_light900 font-sora ">
//             Dev<span className="text-primary-500">Loom</span>
//           </p>
//         </Link>

//         <div className="flex flex-col border-none justify-between h-full">

//           {/* <div className="bg-blue-500 "> */}
//           <SheetClose>
//             <NavContent />

//           </SheetClose>

//           <SignedIn>
//           <Link
//             href="/ask-question"
//             className=" primary-gradient mt-3 hidden
// justify-center  rounded-[13px] p-3 font-sora  text-[0.96rem] font-semibold text-slate-100
// max-sm:w-full lg:flex"
//           >
//             Insync is A Platform for Developers to Solve thier Doubts and

//           </Link>
//         </SignedIn>

//           {/* </div> */}

//          <div className=" my-2 " >
//          <SignedOut>
//             <div className="mt-3 font-poppins  flex flex-col  gap-3">
//               <SheetClose asChild>
//                 <Link href="/sign-in">
//                   <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
//                     <span className="primary-text-gradient rubi ">Log In</span>
//                   </Button>
//                 </Link>
//               </SheetClose>

//               <SheetClose asChild>
//                 <Link href="/sign-up">
//                   <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[42px] rubi  w-full rounded-lg border px-4 py-3 shadow-none">
//                     Sign Up
//                   </Button>
//                 </Link>
//               </SheetClose>
//             </div>
//           </SignedOut>

//          </div>

//         </div>

//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileNav;

"use client";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
// import MobileProfile from "@/components/cards/mobileProfile"
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";

import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full  flex-col gap-2 pt-6 font-poppins">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        // TODO

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } my-1 flex items-center justify-start  gap-2 bg-transparent p-2 font-rubik`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={22}
                height={22}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={33}
          height={33}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="background-light900_dark200 rounded-r-[24px] border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image src="/light-logo.svg" width={30} height={30} alt="Insync" />

          <p className="h2-bold text-dark100_light900  font-rubik  ">
            Dev<span className="font-rubik text-primary-500  ">Loom</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className="mt-4 flex flex-col gap-3  font-poppins">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient font-rubik">
                      Log In
                    </span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 font-rubik shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
