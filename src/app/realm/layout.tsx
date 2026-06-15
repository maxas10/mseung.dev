import type { Metadata } from "next";
import { MedievalSharp, VT323, Press_Start_2P } from "next/font/google";
import "./realm.css";

const medieval = MedievalSharp({
  variable: "--font-medieval",
  subsets: ["latin"],
  weight: "400",
});

const term = VT323({
  variable: "--font-term",
  subsets: ["latin"],
  weight: "400",
});

const pixel = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "realm.os — a fantasy desktop",
  description: "A portfolio disguised as a fantasy pixel-art Linux desktop rice.",
};

export default function RealmLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${medieval.variable} ${term.variable} ${pixel.variable}`}
      style={{ ["--font-tiny" as string]: "var(--font-pixel)" }}
    >
      {children}
    </div>
  );
}
