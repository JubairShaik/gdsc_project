"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
 
import React from 'react';



// @container
// eslint-disable-next-line tailwindcss/no-custom-classname
const variants = cva(
  "shadow-grid  flex flex-col justify-center rounded-3xl bg-white dark:bg-neutral-900",
  {
    variants: {
      size: {
        "1x2": "col-span-2 row-span-2 p-4 md:col-span-1 md:p-8",
        "2x1": "col-span-full row-span-1 p-4 md:col-span-2 md:px-8",
        "2x2": "col-span-full row-span-2 p-4 md:col-span-2 md:p-8",
        "2x4":
          "relative col-span-full row-span-4 overflow-hidden md:col-span-2",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItem = ({ size, children }: GridItemProps) => {
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className={cn(
        variants({
          size,
          className:
            "hover:dark:bg-neutral-800 hover:bg-neutral-50 duration-75 transition-colors ease-in-out",
        })
      )}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
