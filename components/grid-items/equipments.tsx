import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";

const Equipments = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex h-full w-full flex-col items-end justify-end overflow-hidden rounded-3xl">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90" />
      {/* Image */}
      <Image
        className="z-0 h-full w-full object-cover object-center"
        src={item.image ?? ""}
        alt="equipments"
        fill
      />
      {/* Content */}
      <div className="relative z-20 w-full space-y-3 p-4 md:p-8">
        <div className="text-sm font-medium text-white">{item.title}</div>
        <div className="flex flex-wrap items-center gap-3">
          {item.equipments?.map((equipment, index) => {
            return (
              <Link
                className="rounded-lg bg-white px-2 py-1 text-sm font-medium dark:bg-neutral-900"
                key={equipment.link + index}
                href={equipment.link}
              >
                {equipment.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
