/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  filters: {
    name: string,
    value: string,
  }[];
  otherClasses?: string;
  containerClasses?: string;
}

const Filter = ({ filters, otherClasses, containerClasses }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramFilter = searchParams.get('filter');

  const handleUpdateParams = (value: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'filter',
      value
    })

    router.push(newUrl, { scroll: false })
  }

  return (
    <div className={`relative ${containerClasses}`}>
      <Select
        onValueChange={handleUpdateParams}
        defaultValue={paramFilter || undefined}
      >
        <SelectTrigger className={`${otherClasses}   body-regular light-border background-light900_dark300 text-dark500_light700 border p-6 md:p-8   `}>
        <div className="line-clamp-1 flex-1 md:text-md font-medium text-left">
          <SelectValue placeholder="Select a Filter" />
        </div> 
        </SelectTrigger>

        
        <SelectContent className="text-dark500_light700 
        small-regular rounded-[22px] border-none p-2  z-90 bg-light-900 mt-2 md:mt-3 dark:bg-dark-300">
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem key={item.value} value={item.value} className="cursor-pointer font-medium z-90  font-poppins px-6  py-3    my-3   gap-2 rounded-[12px] hover:bg-light-700 focus:bg-light-800 dark:focus:bg-dark-400">
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filter