/* eslint-disable tailwindcss/classnames-order */


import { formatAndDivideNumber } from "@/lib/utils"
import { BadgeCounts } from "@/types";
import Image from "next/image";

interface StatsCardProps {
  imgUrl: string;
  value: number;
  title: string;
}

const StatsCard = ({ imgUrl, value, title }: StatsCardProps) => {
  return (
    <div className="light-border background-light900_dark300
      rounded-xl md:rounded-2xl  flex  flex-col
     items-center  md:p-6  justify-center gap-3  border p-4 
     shadow-light-300 dark:shadow-md ">

      <Image src={imgUrl} alt={title} width={55} height={55} />
      <div className="flex justify-center items-center flex-col" >
        <p className="  paragraph-semibold2   text-dark400_light700">{title}</p>
        <p className="  h2-bold text-dark200_light900">
          {value}
        </p>
      </div>


    </div>
  )
}

interface Props {
  totalQuestions: number
  totalAnswers: number
  badges: BadgeCounts
  reputation: number
}



const Stats = ({ totalQuestions, totalAnswers, badges, reputation }: Props) => {
  return (
    <div className="mt-0 md:mt-2 w-full ">


      {/* <RightPanel/> */}
      {/* - {reputation}  Poients */}
      <h4 className="h2-semibold p-2 text-dark200_light900"> Stats  </h4>
      

      <div className="mt-5 grid gap-4 md:gap-5 grid-cols-2 md:grid-cols-4">
       
 

         <StatsCard 
          imgUrl="/assets_uxcel/asset 5.svg"
          value= {reputation} 
          title="Points"
        />
         <StatsCard 
          imgUrl="/assets/icons/gold-medal.svg"
          value={badges.GOLD}
          title="Gold Badges"
        />

        <StatsCard 
          imgUrl="/assets/icons/silver-medal.svg"
          value={badges.SILVER}
          title="Silver Badges"
        />

        <StatsCard 
          imgUrl="/assets/icons/bronze-medal.svg"
          value={badges.BRONZE}
          title="Bronze Badges"
        />

      
        


      </div>
      <div className="grid grid-cols-2 gap-5 py-5">
          <div className=" background-light900_dark300 text-center rounded-xl py-3">
            <p className="paragraph-semibold text-dark200_light900">
              {formatAndDivideNumber(totalQuestions)}
            </p>
            <p className="body-medium text-dark400_light700">Questions</p>
          </div>
          <div className="background-light900_dark300 text-center rounded-xl py-3">
            <p className="paragraph-semibold text-dark200_light900">
              {formatAndDivideNumber(totalAnswers)}
            </p>
            <p className="body-medium text-dark400_light700">Answers</p>
          </div>
        </div>





    </div>
  )
}

export default Stats