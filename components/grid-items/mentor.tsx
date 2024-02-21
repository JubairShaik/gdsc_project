/* eslint-disable tailwindcss/classnames-order */
import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import Icon from "../icon";

const Mentor = ({ item }: { item: GridItemInterface }) => {
  return (


    <Link
      
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4"
    >
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className="w-full @lg:text-lg font-semibold">{item.title}</div>
      {/* Price & Promo Container */}
      <div className="">
        {/* Top Container */}
        <div className="flex items-center justify-between">
          {/* <div className="text-xs text-neutral-500">PROMO</div> */}
          <div className="flex items-center gap-1">
            {/* Old Price */}
            {/* <div className="text-xs line-through text-neutral-500">
              {item.oldPrice}
            </div>
            <div>{item.price}</div> */}
          </div>
        </div>
        {/* Bottom Container */}
        <div className=" font-medium md:font-bold  w-full text-blue-500  @lg:text-base text-sm">
          {item.promotion}
        </div>
      </div>
    </Link>
  );
};

export default Mentor;
