// @ts-nocheck

/* eslint-disable tailwindcss/classnames-order */
import BlogCard from "@/components/cards/BlogCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
// import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { SearchParamsProps } from "@/types";
// import Link from "next/link";
import Pagination from "@/components/shared/Pagination";
import type { Metadata } from "next";
import { auth } from "@clerk/nextjs";
import { getBlogs, getRecommendedBlogs } from "@/lib/actions/blog.action";

export const metadata: Metadata = {
  title: "Blogs - For Developers By Developers ",
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
      result = await getRecommendedBlogs({
        userId,
        searchQuery: searchParams.q,
        page: searchParams.page ? +searchParams.page : 1,
      });
    } else {
      result = {
        blogs: [],
        isNext: false,
      };
    }
  } else {
    result = await getBlogs({
      searchQuery: searchParams.q,
      filter: searchParams.filter,
      page: searchParams.page ? +searchParams.page : 1,
    });
  }

  return (
    <section className=" mt-2 md:mt-0">
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 font-rubik">All Blogs</h1>

        {/* <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Start Posting 
          </Button>
        </Link> */}
      </div>

      <div className="mt-4 flex  justify-between gap-5 max-sm:flex-col sm:items-center md:mt-8">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Blogs"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-8 grid w-full grid-cols-1 items-center gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
        {result.blogs?.length > 0 ? (
          result.blogs.map((question) => (
            <BlogCard
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
            title="Sorry NoResults "
            
            linkTitle="Start Posting"
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
