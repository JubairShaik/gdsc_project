/* eslint-disable tailwindcss/classnames-order */
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <div className="m-0 flex flex-col justify-center  rounded-[20px] items-center mt-4 pt-10 dark:bg-[#151821] bg-[#fff] mx-2 md:mx-20 py-20">
        <Skeleton
          className="mt-3 flex  h-40 w-40 flex-col rounded-full items-center
         justify-center  p-4"
        />

        <Skeleton className="h-12 mt-8 mb-3 w-3/12" />

        <Skeleton className=" h-5 w-28" />

        <div className="mt-5">
          <div className="mt-2  flex flex-wrap items-center justify-center gap-5">
            <Skeleton className="h-7 w-60" />
          </div>
        </div>
      </div>

      <div className="mb-12 mt-10 px-2 md:px-20">
        <div className="mt-5 grid grid-cols-2 gap-5 xs:grid-cols-2 md:grid-cols-4 ">
          <Skeleton className="h-44 md:h-56 w-full rounded-xl md:rounded-2xl " />
          <Skeleton className="h-44 md:h-56 w-full rounded-xl md:rounded-2xl" />
          <Skeleton className="h-44 md:h-56 w-full rounded-xl md:rounded-2xl" />
          <Skeleton className="h-44 md:h-56 w-full rounded-xl md:rounded-2xl" />
        </div>
      </div>

    </section>
  );
};

export default Loading;
