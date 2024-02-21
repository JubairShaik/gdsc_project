import Link from 'next/link';
import React from 'react'
import { Badge } from "@/components/ui/badge"

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium  background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">{name}</Badge>

      {showCount && (
        <p className=" text-dark500_light700 flex h-7 w-7  items-center justify-center  rounded-md bg-slate-200 text-[.9rem] dark:bg-slate-800">{totalQuestions}</p>
      )}
    </Link>
  )
}

export default RenderTag