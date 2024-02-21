/* eslint-disable camelcase */
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import "@/styles/theme.css";
import "@/styles/prism.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Insync - Skill Matters",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    // icon: "/assets/images/site-logo.svg",
    icon: "/assets/images/dev-loom.svg",
  },

  other: {
    "theme-color": "#f67d1e",
    "color-scheme": "dark only",

    "twitter:image": "https://i.ibb.co/9vDC2jN/Thumbnail.jpg",
    "twitter:card": "summary_large_image",

    "og:url": "https://dev-loom.vercel.app/",
    "og:image": "https://i.ibb.co/9vDC2jN/Thumbnail.jpg",
    "og:type": "website",
  },
  // manifest: "/manifest.json",
};

// export const viewport: Viewport = {
//   themeColor: "#0A0A0A",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
