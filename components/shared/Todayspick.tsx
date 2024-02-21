import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const data = [
  {
    name: "Web Development",
    bg: "#FF5733",
    content: "Hire professional developers who can match your requistes",
  },
  {
    name: "App Development",
    bg: "#4285F4",
    content:
      "Build real time applications collaborating with app developing executives",
  },
  {
    name: "UI/UX Designer",
    bg: " #F4B400",
    content: "Hire creative minds who can match your imaginations",
  },
  { name: "Content Creator", bg: "#a52a2a  " },
  {
    name: "Animations",
    bg: "#FFA233",
    content: "Engage with artful peers who make imagination come true ",
  },
  { name: "Graphic Designer", bg: "#0F9D58" },
  { name: "Digital Marketer", bg: "#FF33A2" },
  { name: "Finance", bg: "#800080" },
];

const Todayspick = () => {
  return (
    <div>
      <div className="py-20 my-20">
        <h1 className="text-5xl font-bold">Todays Favourite</h1>


    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {data.map((item) => (
      <Link key={item.name} href={`/highlight/${item.name}`}>
        <div
          className="h-52 rounded-xl p-5 text-2xl font-bold text-white transition-all hover:scale-105"
          style={{ backgroundColor: item.bg }}
        >
          <h2 className="mt-32 flex items-center gap-1">
            {item.name}
            <IoIosArrowForward className="mt-1 text-lg" />
          </h2>
        </div>
      </Link>
    ))}
  </div>
      </div>
    </div>
  );
};

export default Todayspick;
