/* eslint-disable tailwindcss/classnames-order */
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { HomePageFilters } from "@/constants/filters";
import { SearchParamsProps } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/shared/Pagination";
import type { Metadata } from "next";
import { auth } from "@clerk/nextjs";
import {
  getQuestions,
  getRecommendedQuestions,
} from "@/lib/actions/question.action";

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
  const { userId } = auth();

  let result;

  if (searchParams?.filter === "recommended") {
    if (userId) {
      result = await getRecommendedQuestions({
        userId,
        searchQuery: searchParams.q,
        page: searchParams.page ? +searchParams.page : 1,
      });
    } else {
      result = {
        questions: [],
        isNext: false,
      };
    }
  } else {
    result = await getQuestions({
      searchQuery: searchParams.q,
      filter: searchParams.filter,
      page: searchParams.page ? +searchParams.page : 1,
    });
  }

  return (
    <section className="mt-6 md:mt-2 ">
      <div className="flex w-full flex-col-reverse justify-between  gap-2 sm:flex-row sm:items-center md:gap-4">
        <h1 className="h1-bold text-dark100_light900">
          Hire the Most Professionals in NoCost{" "}
        </h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient text-[20px] font-semibold font-rubik min-h-[46px] px-5 py-4 !text-light-900">
            Start Posting
          </Button>
        </Link>
      </div>

      <div className="mt-5 flex justify-between gap-3 max-sm:flex-col sm:items-center md:mt-8 md:gap-5">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="What are you Looking for ?"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-8 w-full  grid  grid-cols-1 md:grid-cols-2 gap-4 md:mt-10 md:gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="Oops ! No Results Found "
            description="Please Complete your Profile to get Full Benifits"
             
          />
        )}
      </div>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </section>
  );
}
