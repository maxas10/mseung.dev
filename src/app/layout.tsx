import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSEUNG.dev",
  description: "Definitely one of the websites ever containing silly games and stuff I make.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen w-screen justify-center items-center flex-col">
          <div className="w-[1000px] h-[600px]
          bg-black
            rounded-md 
            shadow-2xl 
            p-5
          border-gray-400
            border-[1px] 
            overflow-y-scroll 

            [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-black
          dark:[&::-webkit-scrollbar-thumb]:bg-gray-400"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
