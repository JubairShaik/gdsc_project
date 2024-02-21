export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Linkedin",
    icon: "linkedin",
    username: "@jubair.ahmed",
    description: "Feel free to get in Touch via Linkedin",
    // color: "#FF0000",
    buttonTitle: "Connect",
    buttonLink: "https://www.youtube.com/@jubairdotdev",
    // buttonSecondaryText: "1.1K",
  },
  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Youtube",
  //   icon: "youtube",
  //   username: "@jubair.ahmed",
  //   description:
  //     "My true passion is learning and sharing my knowledge, which is why I started creating Youtube videos about web development, startups, and marketing.",
  //   color: "#FF0000",
  //   buttonTitle: "Subscribe",
  //   buttonLink: "https://www.youtube.com/@jubairdotdev",
  //   buttonSecondaryText: "1.1K",
  // },

  {
    layout: "1x2",
    type: "social",
    title: "Gmail",
    icon: "discord",
    username: "@jubairahmed",
    buttonTitle: "Message",
    buttonLink: "mailto:jubair.dev@gmail.com",
    // buttonSecondaryText: "44",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@JubairShaik",
    buttonTitle: "Follow",
    buttonSecondaryText: "36",
    buttonLink: "https://github.com/batuhanbilginn",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Skills",
    image: "/download.png",
    equipments: [
      {
        title: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        title: "Node.js",
        link: "https://nodejs.org/",
      },
      {
        title: "Express.js",
        link: "https://expressjs.com/",
      },
      {
        title: "MongoDB",
        link: "https://www.mongodb.com/",
      },
      {
        title: "NextJS.js",
        link: "https://vuejs.org/",
      },
      {
        title: "GraphQl",
        link: "https://angular.io/",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Portfolio",
    icon: "twitter",
    username: "@jubairahmed",
    buttonTitle: "Follow",
    buttonLink: "https://jubair.vercel.app",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "Full-stack Developer / I build AI applications and create video tutorials on Youtube.",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Project Sharing Website",
    icon: "superpeer",
    promotion: "Visit",
    oldPrice: "$100",
    price: "$50",
    buttonLink: "https://loom-resources.vercel.app",
  },

  {
    layout: "2x1",
    type: "mentor",
    title: "Learning Loom ",
    icon: "superpeer",
    promotion: "Visit",
    oldPrice: "$100",
    price: "$50",
    buttonLink: "https://loom-resources.vercel.app",
    // buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
  },

  // {
  //   layout: "2x1",
  //   type: "project",
  //   title: "Insync",
  //   icon: "github",
  //   color: "#070707",
  //   buttonLink: "https://github.com/batuhanbilginn/makr-ai",
  //   stars: 73,
  // },
  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Full-stack Multilingual Blog with Next.js 13",
  //   username: "@batuhanbilginn",
  //   description:
  //     "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
  //   icon: "udemy",
  //   buttonTitle: "Enroll",
  //   buttonSecondaryText: "%90 OFF",
  //   buttonLink:
  //     "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  // },
  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Full-stack Multilingual Blog with Next.js 13",
  //   username: "@batuhanbilginn",
  //   description:
  //     "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
  //   icon: "udemy",
  //   buttonTitle: "Enroll",
  //   buttonSecondaryText: "%90 OFF",
  //   buttonLink:
  //     "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  // },
  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Full-stack Multilingual Blog with Next.js 13",
  //   username: "@batuhanbilginn",
  //   description:
  //     "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
  //   icon: "udemy",
  //   buttonTitle: "Enroll",
  //   buttonSecondaryText: "%90 OFF",
  //   buttonLink:
  //     "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  // },
  // {
  //   layout: "2x1",
  //   type: "project",
  //   title: "AI Blog Post Generator",
  //   icon: "github",
  //   stars: 19,
  //   color: "#070707",
  //   buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
  // },
];

export const siteConfig = {
  creator: "Shaik Jubair Ahmed",
  title: "Full Stack Developer",
  bio: "I Watch Movies and love to  Design and Develop Websites",
  location: "India",
  locationLink:
    "https://www.google.com/maps/place/Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul/@40.981133,29.063053,12z/data=!3m1!4b1!4m6!3m5!1s0x14cac790b17ba89d:0xd2d24ea0437a7ee2!8m2!3d40.981867!4d29.0576302!16zL20vMDV5cWY4?entry=ttu",
  email: "Jubair.dev@gmail.com",
  items: GridItems,
} as const;
