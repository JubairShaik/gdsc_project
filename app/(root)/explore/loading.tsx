/* eslint-disable tailwindcss/classnames-order */
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <div className="m-0 flex flex-col justify-center  rounded-[20px] items-center">
        <Skeleton
          className="mt-3 flex  h-36 w-36 flex-col rounded-full items-center
         justify-center  p-4"
        />

        <Skeleton className="h-12 my-8 w-36" />

        <Skeleton className=" h-7 w-20" />

        <div className="mt-1">
          <div className="mt-2  flex flex-wrap items-center justify-center gap-5">
            <Skeleton className="h-9 w-36" />
            <Skeleton className="h-9 w-36" />
            <Skeleton className="h-9 w-36" />
          </div>
        </div>
      </div>

      <div className="mb-12 mt-10">
        <Skeleton className="h-7 w-full" />

        <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3">
          <Skeleton className="h-64 w-64 rounded-md" />
          <Skeleton className="h-64 w-64 rounded-md" />
          <Skeleton className="h-64 w-64 rounded-md" />
        </div>
      </div>

      <div className="mt-10 flex gap-10">
        <div className="flex flex-1 flex-col">
          <div className="flex">
            <Skeleton className="h-11 w-24 rounded-r-none" />
            <Skeleton className="h-11 w-24 rounded-l-none" />
          </div>

          <div className="mt-5 flex w-full flex-col gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <Skeleton key={item} className="h-48 w-full rounded-xl" />
            ))}
          </div>
        </div>

        <div className="flex min-w-[278px] flex-col max-lg:hidden">
          <Skeleton className="h-7 w-10" />

          <div className="mt-7 flex flex-col gap-4">
            <Skeleton className="h-7" />
            <Skeleton className="h-7" />
            <Skeleton className="h-7" />
            <Skeleton className="h-7" />
            <Skeleton className="h-7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
