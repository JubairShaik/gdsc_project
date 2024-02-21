import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <h1 className='h1-bold text-dark100_light900'>Tags</h1>

      <div className='mb-12 mt-11 flex flex-wrap items-center justify-between gap-5'>
        <Skeleton className='h-14 flex-1 w-9/12' />
        <Skeleton className='h-14 w-3/12' />
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12].map((item) => (
          <Skeleton
            key={item}
            className='h-32 w-full rounded-xl'
          />
        ))}
      </div>
    </section>
  );
};

export default Loading;
