/* eslint-disable tailwindcss/classnames-order */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import RenderTag from './RenderTag';
import { getHotQuestions } from '@/lib/actions/question.action';
import { getTopPopularTags} from '@/lib/actions/tag.actions';
// import Demo from './Demo';
import Nav from '../Nav';


const RightSidebar = async () => {
// @ts-ignore
  const hotQuestions = await getHotQuestions()
  // @ts-ignore
  const popularTags = await getTopPopularTags()



  return (
    // background-light800_dark200 
    // eslint-disable-next-line tailwindcss/no-custom-classname



    <Nav className="hidden ">

      <div className="rounded-[20px] bg-[#f3f3f3] p-5  dark:bg-[#252930]" >
        <h3 className="h3-bold font-rubik text-dark200_light900">Top Questions</h3>
        <div className="mt-6  flex w-full flex-col gap-[18px] ">

          {/* <Demo/> */}
          
          {hotQuestions?.map((question) => (
            <Link
             // @ts-ignore
              href={`/question/${question._id}`}
               // @ts-ignore
              key={question._id}
              className=' flex cursor-pointer items-center justify-between
              
              gap-6 rounded-[12px] bg-white p-3 dark:bg-slate-900'
            >
              <p className="body-medium  text-dark200_light900 ">{question.title}</p>
              <Image 
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-5 p-5 ">
      <h3 className="h3-bold  font-rubik  text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
            {popularTags.map((tag) => (
              <RenderTag 
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.numberofQuestions}
                showCount
              />
            ))}
        </div>
      </div>
    </Nav>
  )
}

export default RightSidebar




















// const hotQuestions = [
//   { _id: '1', title: 'How do I use express as a custom server in NextJS?' },
//   { _id: '2', title: 'Cascading Deletes in SQLAlchemy?' },
//   { _id: '3', title: 'How to Perfectly Center a Div with Tailwind CSS?' },
//   { _id: '4', title: 'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?' },
//   { _id: '5', title: 'Redux Toolkit Not Updating State as Expected' },
// ];

// const popularTags = [
//   { _id: '1', name: 'javascript', totalQuestions: 5 },
//   { _id: '2', name: 'react', totalQuestions: 5 },
//   { _id: '3', name: 'next', totalQuestions: 5 },
//   { _id: '4', name: 'vue', totalQuestions: 2 },
//   { _id: '5', name: 'redux', totalQuestions: 10 },
// ]