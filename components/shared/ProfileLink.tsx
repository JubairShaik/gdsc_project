import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button"
interface ProfileLinkProps {
  imgUrl? : string;
  href?: string;
  title? : string;
  title2? : string;
  Icon? : string;
  color? : string ;
  
  // @ts-ignore
}

const ProfileLink = ({ imgUrl, href, title , Icon ,title2 ,color }: ProfileLinkProps) => {


  
  return (
    
    <div className=" col-span-2 row-span-2  flex flex-col
    justify-center gap-1 itrms-center rounded-xl  p-4
    background-light900_dark300  md:col-span-1 md:rounded-2xl 
     shadow-light-300 dark:shadow-md 
     md:p-6 ">
  


  {/* <div className="relative col-span-full row-span-4 overflow-hidden md:col-span-2" > */}

      {imgUrl && (

      <Image src={imgUrl} alt="icon" width={34} height={34} />


      )}

     


      {href ? (
        <Link href={href} target="_blank" className="paragraph-medium ">
           <Image
          // @ts-ignore
            src={Icon}
            alt="profile picture"
            width={44}
            height={44}
            className=" mb-2 object-cover md:mb-3"
          />


          {title}

         
        </Link> 
      ) : (
        <>
        <p className="paragraph-medium @lg:text-lg text-dark400_light700 line-clamp-1  font-semibold">
          {title}
        </p>
        
        </>

      )}


{title2 && (
        // <p className="paragraph-medium bg-slate-400 dark:bg-black rounded-md max-w-[160px] p-1 w-full text-dark400_light700">
        
    

<div className="mt-2">
<Button
  text={title2 ?? ""}
  // secondaryText={item.buttonSecondaryText}
  color={color}
/>
</div>
      // </p>
      )}
          

</div>




  )
}

export default ProfileLink