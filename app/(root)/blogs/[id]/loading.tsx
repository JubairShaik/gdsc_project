/* eslint-disable tailwindcss/classnames-order */
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="mx-4 md:mx-5 md:px-5 lg:mx-10 lg:px-10 pt-7 bg-white dark:bg-[#1D2127] rounded-2xl">
      <div className="m-0 flex flex-col justify-center rounded-[20px]">
         
        <div className="flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-7 w-36" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="mb-6 mt-6">
        <Skeleton className="h-10 w-7/12" />

        <div className="mt-4 flex items-center gap-2">
          <Skeleton className="h-7 w-2/12 rounded-md" />
          <Skeleton className="h-7 w-1/12 rounded-md" />
          <Skeleton className="h-7 w-1/12 rounded-md" />
          
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-col gap-4">
            <Skeleton className="h-7 w-9/12 rounded-md" />
            <Skeleton className="h-16 w-full rounded-md" />
        </div>

        <div className="flex min-w-[278px] flex-col max-lg:hidden">
        <Skeleton className="h-7 w-2/12 mt-5" />
          <div className="mt-7">
            <Skeleton className="h-screen w-full" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
