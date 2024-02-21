import { SidebarLink } from "@/types";
// import { SignedIn, auth } from "@clerk/nextjs";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/opentowork",
    label: "Open to Work",
  },
  // {
  //   imgURL: "/assets/icons/users.svg",
  //   route: "/community",
  //   label: "Community",
  // },

  // {
  //   imgURL: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmOWYxZjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib29rIj48cGF0aCBkPSJNNCAxOS41di0xNUEyLjUgMi41IDAgMCAxIDYuNSAySDIwdjIwSDYuNWEyLjUgMi41IDAgMCAxIDAtNUgyMCIvPjwvc3ZnPg==",
  //   route: "/myblogs",
  //   label: "Tech Blogs",
  // },
  // {
  //   imgURL: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmOWYxZjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib29rbWFyayI+PHBhdGggZD0ibTE5IDIxLTctNC03IDRWNWEyIDIgMCAwIDEgMi0yaDEwYTIgMiAwIDAgMSAyIDJ2MTZ6Ii8+PC9zdmc+",
  //   route: "/collection",
  //   label: "Bookmarks",
  // },
  // {
  //   imgURL: "/assets/icons/star.svg",
  //   route: "/explore",
  //   label: "Explore",
  // },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Apply Jobs",
  },
  // {
  //   imgURL:
  //     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmOWYxZjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2RlIj48cG9seWxpbmUgcG9pbnRzPSIxNiAxOCAyMiAxMiAxNiA2Ii8+PHBvbHlsaW5lIHBvaW50cz0iOCA2IDIgMTIgOCAxOCIvPjwvc3ZnPg==",
  //   route: "/coding-questions",
  //   label: "Explore",
  // },
  {
    imgURL:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmOWYxZjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10YWdzIj48cGF0aCBkPSJNOSA1SDJ2N2w2LjI5IDYuMjljLjk0Ljk0IDIuNDguOTQgMy40MiAwbDMuNTgtMy41OGMuOTQtLjk0Ljk0LTIuNDggMC0zLjQyTDkgNVoiLz48cGF0aCBkPSJNNiA5LjAxVjkiLz48cGF0aCBkPSJtMTUgNSA2LjMgNi4zYTIuNCAyLjQgMCAwIDEgMCAzLjRMMTcgMTkiLz48L3N2Zz4=",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Start Posting ",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 6,
    SILVER: 20,
    GOLD: 30,
  },
  ANSWER_COUNT: {
    BRONZE: 5,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 5,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 5,
    SILVER: 50,
    GOLD: 100,
  },

  TOTAL_VIEWS: {
    BRONZE: 100,
    SILVER: 10000,
    GOLD: 100000,
  },
};

/*

// export const noHeaderFooterUrls = ['/community', '/profile/:id', '/tags' , "/blogs", "/" ]
*/
export const noHeaderFooterUrls = [
  "/collection",
  "/jobs",
  "/",
  "/ask-question",
];
