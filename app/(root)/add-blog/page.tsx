import BlogForm from "@/components/forms/BlogForm";
import { getUserById } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask Question | Insync ",
  description:
    "Be specific and imagine you're asking a question to another person and give the Detailed explanation of your problem ! ",
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

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  // console.log(mongoUser)

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Post A Blog Bro ! </h1>

      <div className="mt-9">
        <BlogForm mongoUserId={JSON.stringify(mongoUser?._id)} />
      </div>
    </div>
  );
};

export default Page;
