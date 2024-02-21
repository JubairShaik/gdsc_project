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
      <div className="py-20 my-20">
        <h1 className="text-5xl font-bold">Today's Favourite</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-16">
          {data.map((item, index) => (
            <Link href={`/highlight/${item.name}`}>
              <div
                key={index}
                style={{ backgroundColor: `${item.bg}` }}
                className="rounded-xl h-52 text-white font-bold text-2xl p-5 hover:scale-105 transition-all main-class"
              >
                <h1 className="mt-32 flex items-center gap-1">
                  {item.name}
                  <IoIosArrowForward className="text-lg mt-1" />
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
