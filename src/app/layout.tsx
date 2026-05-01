import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Template from "./components/template";
import Terminal from "./components/terminal";
import Emojis from "./components/emojis";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mseung.dev",
  description: "Definitely one of the websites ever containing silly games and stuff I make.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ml-1 h-screen flex justify-center items-center overflow-x-hidden`}
      >
        <Emojis></Emojis>
        <Template><Terminal>{children}</Terminal></Template>
      </body>
    </html>
  );
}
