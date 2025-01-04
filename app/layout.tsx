import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Droidfest 2025",
  description: "Join us at Droidfest, Kolkata's premier conference for Kotlin and Android developers. Engage in knowledge exchange, networking, and skill enhancement with fellow enthusiasts and professionals.",
  keywords: ["Droidfest", "Kotlin", "Android", "Developer Conference", "Kolkata", "Programming", "Tech Event", "Software Development", "Kotlin User Group", "Networking", "Coding Workshop"],
  authors: [{name: "KUG Kolkata Dev Team"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${roboto.variable} antialiased w-full h-full min-h-screen flex flex-col text-body`}
      >
      <>
        <Header />
        {children}
      </>
      </body>
    </html>
  );
}
