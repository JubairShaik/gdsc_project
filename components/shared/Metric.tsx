import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title?: string;
  href?: string;
  textStyles?: string;
  iconStyles?: string;
  isAuthor?: boolean;
  
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  iconStyles,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image 
        src={imgUrl}
        width={23}
        height={23}
        alt={alt}
        className={`object-contain  ${iconStyles} ${href ? 'rounded-full' : ''}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>
        {value}

        <span className={`small-medium line-clamp-1 ${isAuthor ?'max-sm:hidden' : ''}`}>
          {title}
        </span>
      </p>
    </>
  )

  if(href) {
    return (
      <Link href={href} className="flex-center  gap-1">
        {metricContent}
      </Link>
    )
  }

  return (
    <div className="flex-center flex-wrap gap-1">
      {metricContent}
    </div>
  )
}

export default Metric