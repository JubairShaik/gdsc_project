import Link from 'next/link';
import React from 'react'
// import RenderTag from '../shared/RenderTag';
import Metric from '../shared/Metric';
import { formatAndDivideNumber, getTimestamp } from '@/lib/utils';
import { SignedIn } from '@clerk/nextjs';
import EditDeleteAction from '../shared/EditDeleteAction';

// https://dev-loom1.vercel.app/api/webhook

interface BlogProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
    clerkId: string;
  };
  upvotes: string[];
  views: number;
  answers: Array<object>;
  createdAt: Date;
  clerkId?: string;
}

const BlogCard = ({
  clerkId,
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt
}: BlogProps) => {

  const showActionButtons = clerkId === author.clerkId;
   
  // const showActionButtons = clerkId || clerkId === author.clerkId;

  return (



    <div className="card-wrapper rounded-[20px] p-5  dark:bg-[#252930] sm:px-8 md:p-6">
      <div className="flex md:flex-row flex-col-reverse items-start justify-between gap-5 sm:flex-row">

        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1
           flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/blogs/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 leading-[34px] md:leading-[27px] font-rubik mt-2 line-clamp-2 flex-1">
              {title} 
            </h3>
          </Link>
        </div>

        
        <SignedIn>

          {showActionButtons && (
            <EditDeleteAction type="Blog" itemId={JSON.stringify(_id)} />
           )} 
        </SignedIn>

        
      </div>
      
    x

      <div className="flex-between mt-6 w-full flex-wrap gap-3">


      {/* <Metric
          imgUrl={author.picture}
          alt='user'
          value={author.name}
          title={` - posted ${getTimestamp(createdAt)}`}
          href={`/profile/${author.clerkId}`}
          isAuthor
          textStyles='body-medium text-dark400_light700'
        /> */}

    <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
            <Metric 
              imgUrl="/assets/icons/like.svg"
              alt="Upvotes"
              value={formatAndDivideNumber(upvotes.length)}
              title=" Votes"
              textStyles="small-medium   text-dark400_light800"
            />
           
            <Metric 
              imgUrl="/assets/icons/eye.svg"
              alt="eye"
              value={formatAndDivideNumber(views)}
              title=" Views"
              textStyles="small-medium text-dark400_light800"
            />
          </div>
      </div>
      
      
    </div>
  )
}

export default BlogCard