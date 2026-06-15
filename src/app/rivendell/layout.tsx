import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./rivendell.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Rivendell — The Last Homely House",
  description:
    "An enchanted interface — a fantasy operating system of the elves, east of the Sea.",
};

export default function RivendellLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
