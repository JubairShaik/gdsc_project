import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


const data = [
  {
    name: "Web-Development",
    bg: "#FF5733",

  },
  {
    name: "App-Development",
    bg: "#4285F4",

  },
  {
    name: "UI/UX-Designer",
    bg: " #F4B400",
  },
  { name: "Content-Creator", bg: "#a52a2a" },
  {
    name: "Animations",
    bg: "#FFA233",

  },
  { name: "Graphic-Designer", bg: "#0F9D58" },
  { name: "Digital-Marketer", bg: "#FF33A2" },
  { name: "Finance", bg: "#800080" },
];

const Todayspick = () => {

  return (
    <div>
      <div className="my-20 py-20">
        <h1 className="text-5xl font-bold">Todays Favourite</h1>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item, index) => (
            <Link href={`/highlight/${item.name}`}
            key={item.name}
            
            >
              <div
                style={{ backgroundColor: `${item.bg}` }}
                className=" h-52 rounded-xl p-5 text-2xl font-bold text-white transition-all hover:scale-105"
              >
                <h1 className="mt-32 flex items-center gap-1">
                  {item.name}
                  <IoIosArrowForward className="mt-1 text-lg" />
                </h1>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todayspick;
