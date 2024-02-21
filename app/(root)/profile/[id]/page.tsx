/* eslint-disable tailwindcss/classnames-order */
import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types";
import { SignedIn, auth } from "@clerk/nextjs";
import { Pencil , CalendarHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { getJoinedDate } from "@/lib/utils";
import ProfileLink from "@/components/shared/ProfileLink";
import Stats from "@/components/shared/Stats";
import QuestionTab from "@/components/shared/QuestionTab";
import AnswersTab from "@/components/shared/AnswersTab";

const Page = async ({ params, searchParams }: URLProps) => {
  const { userId: clerkId } = auth();

  const userInfo = await getUserInfo({ userId: params.id });

  return (
    <>
      <section className="flex items-center justify-center w-full">
        <div className="flex flex-col justify-center items-center w-full max-w-[870px]     ">
        <div className="m-1 flex flex-col justify-center w-full rounded-[20px] dark:bg-[#151821] md:mt-0 mt-4 bg-white ">
          <div className="mt-3 flex flex-col  items-center justify-center  p-4 ">
            <Image
              src={userInfo?.user?.picture}
              alt="profile picture"
              width={162}
              height={162}
              className="rounded-full md:mt-7 mt-4 object-cover"
            />

            <div className="mt-3  flex flex-col items-center p-1 md:p-4">
              <h2
                className="text-dark100_light900 font-sora text-center text-[26px] font-bold leading-[40px]
             tracking-wide  md:tracking-normal   md:text-[33px]"
              >
                {userInfo.user.name}
              </h2>
              <p className="paragraph-regular text-dark200_light800 my-2">
                @{userInfo.user.username}
              </p>

              {/* <Social item={item} /> */}

              <div className="flex justify-center my-2 max-sm:w-full sm:mt-4 ">
                <SignedIn>
                  {clerkId === userInfo.user.clerkId && (
                    <Link href="/profile/edit">
                      <Button
                        className="paragraph-medium btn-secondary
                 text-dark300_light900 min-h-[46px]
                  min-w-[175px] px-4 rounded-[15px] py-3"
                      >
                        <Pencil />
                        <p className=" ml-2  text-center font-poppins text-[1.1rem] font-semibold tracking-wide ">
                          Edit Profile
                        </p>
                      </Button>
                    </Link>
                  )}
                </SignedIn>
              </div>

              <div className="flex justify-between gap-10  md:mt-5 items-center max-w-md w-full my-3">
                <div className="flex items-center gap-2">
                  <CalendarHeart
                    className="dark:text-slate-600 text-red-400"
                    strokeWidth={1.6}
                  />

                  <p className="text-[14px] uppercase text-slate-600 font-medium tracking-tight leading-[19px]">
                    {`MEMBER SINCE ${getJoinedDate(userInfo.user.joinedAt)}`}
                  </p>
                </div>

               
              </div>

              {userInfo.user.bio && (
                <p
                  className="paragraph-regular text-dark400_light800
             font-medium text-[1.1rem] md:text-[1.3rem]  font-poppins tracking-wide pb-4
              mt-6 md:mt-10"
                >
                  {userInfo.user.bio}
                </p>
              )}
            </div>


              <div>

              {userInfo.user.location && (
                <p
                  className="paragraph-regular text-dark400_light800
             font-medium text-[1.1rem] md:text-[1.3rem]  font-poppins tracking-wide pb-4
              mt-6 md:mt-10"
                >
                  {userInfo.user.loaction}
                </p>
              )}
            </div>




          </div>

          {/* Edit Profile  */}

          {/* <div className="flex justify-end  mt-6 max-sm:w-full sm:mt-10 ">
            <SignedIn>
              {clerkId === userInfo.user.clerkId && (
                <Link href="/profile/edit">
                  <Button
                    className="paragraph-medium btn-secondary
                 text-dark300_light900 min-h-[46px]
                  min-w-[175px] px-4 rounded-[15px] py-3"
                  >
                    <Pencil />
                    <p className=" ml-2  text-center font-poppins text-[1.1rem] font-semibold tracking-wide ">
                      Edit Profile
                    </p>
                  </Button>
                </Link>
              )}
            </SignedIn>
          </div> */}
        </div>




        <div className="grid w-full grid-cols-4 xl:gap-10  gap-4 xl:pt-10 xl:pb-3 py-5 xl:px-1 xl:overflow-y-auto auto-rows-[76px]">
          {userInfo.user.portfolioWebsite && (
            <ProfileLink
              href={userInfo.user.portfolioWebsite}
              title="Gmail"
              title2="Message"
              color="#E74841"
              Icon="/gmail.png"
            />
          )}

          {userInfo.user.linkedin && (
            <ProfileLink
              href={userInfo.user.linkedin}
              title="Linkedin"
              title2="Follow"
              color="#1DA1F2"
              Icon="/linkedin.png"
            />
          )}

          {userInfo.user.portfolioWebsite2 && (
            <ProfileLink
              href={userInfo.user.portfolioWebsite2}
              title="Github"
              title2="Follow"
              color="#53586C"
              Icon="/github2.png"
            />
          )}

          {userInfo.user.portfolioWebsite2 && (
            <ProfileLink
              href={userInfo.user.portfolioWebsite2}
              title="Portfolio"
              title2="explore"
              color="#53586C"
              Icon="/github2.png"
            />
          )}

          {/* {userInfo.user.location && (
  <ProfileLink
    imgUrl="/assets/icons/location.svg"
    title={userInfo.user.location}
  />
)} */}
        </div>

        <Stats
          // @ts-ignore: Example of ignoring an errorX
          reputation={userInfo?.reputation}
          // @ts-ignore: Example of ignoring an errorX
          totalQuestions={userInfo?.totalQuestions}
          // @ts-ignore: Example of ignoring an errorX
          totalAnswers={userInfo?.totalAnswers}
          // @ts-ignore: Example of ignoring an errorX
          badges={userInfo?.badgeCounts}
        />

        <div className="mt-10 flex w-full  gap-10">
          <Tabs defaultValue="top-posts" className="flex-1">


            
            <TabsList className="background-light800_dark400 min-h-[44px] p-1">
              <TabsTrigger value="top-posts" className="tab">
                Top Posts
              </TabsTrigger>
              <TabsTrigger value="answers" className="tab">
                Answers
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="top-posts"
              className="my-2 md:mt-6 flex w-full flex-col gap-6"
            >
              <QuestionTab
                searchParams={searchParams}
                // @ts-ignore: Example of ignoring an errorX
                userId={userInfo.user._id}
                // @ts-ignore: Example of ignoring an errorX
                clerkId={clerkId}
              />
            </TabsContent>






            <TabsContent value="answers" className="flex w-full flex-col gap-6">
              <AnswersTab
                // @ts-ignore: Example of ignoring an errorX
                searchParams={searchParams}
                // @ts-ignore: Example of ignoring an errorX
                userId={userInfo.user._id}
                // @ts-ignore: Example of ignoring an errorX
                clerkId={clerkId}
              />
            </TabsContent>
          </Tabs>
        </div>
        </div>
      </section>
    </>
  );
};

export default Page;
