import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Real Time Fabrications and Construction Services",
  description: "Professional steel fabrication and construction services for residential and commercial projects. Contact us for custom solutions and expert craftsmanship. Located in Lusaka and Kitwe.",
  authors: [{ name: "Joseph"}]
  
};

export const openGraph: OpenGraph = {
  title: "Real Time Fabrications and Construction Services",
  description:"Professional steel fabrication and construction services for residential and commercial projects. Contact us for custom solutions and expert craftsmanship. Located in Lusaka and Kitwe.",
  images:["/image/IMG-20260223-WA0015 - Edited"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-navy text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
