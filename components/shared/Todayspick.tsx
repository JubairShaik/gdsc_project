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
        <h1 className="text-5xl font-bold">Today's Favourite</h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-5 mt-16">
          {data.map((item, index) => (
            <Link href={"/highlight"}>
              <div
                key={index}
                style={{ backgroundColor: `${item.bg}` }}
                className="rounded-xl h-52 text-white font-bold text-2xl p-5 hover:scale-110 transition-all main-class"
              >
                <h1 className="mt-32 flex items-center gap-1">
                  {item.name}
                  <IoIosArrowForward className="text-lg mt-1" />
                </h1>
                <p className="p-class hidden text-sm">
                  {item.content ? item.content : "hello world"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todayspick;
