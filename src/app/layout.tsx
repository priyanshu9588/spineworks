import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistPixel = localFont({
  src: "../../node_modules/@fontsource/geist-pixel/files/geist-pixel-latin-400-normal.woff2",
  variable: "--font-geist-pixel",
  display: "swap",
  preload: true,
  weight: "400",
});

export const metadata: Metadata = {
  title: "Spine",
  description: "Spine",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistPixel.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
