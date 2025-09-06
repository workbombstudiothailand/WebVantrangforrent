import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import React from "react";
import MessengerChat from "../components/MessengerChat";
import { jsonLd } from "./data";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "รถตู้เช่าตรัง | รถตู้พร้อมคนขับมืออาชีพ",
  description: "🚐 เช่ารถตู้ตรัง กระบี่ พัทลุง สตูล นครศรีธรรมราช พร้อมคนขับมืออาชีพ ปลอดภัย ราคาเริ่มต้น 2,000 บาท/วัน บริการ 24 ชม. จองง่าย ได้เลย!",
  keywords: "รถตู้เช่านำเที่ยวตรัง, รถตู้เช่าตรัง, รถตู้Vipตรัง, รถตู้รับส่งสนามบินตรัง, รถตู้รับส่งสนามบินหาดใหญ่, รถตู้รับส่งสนามบินกระบี่, รถตู้เช่ากระบี่, รถตู้เช่าพัทลุง, รถตู้เช่าหาดใหญ่, ตรังรถตู้เช่า, เช่ารถตู้พร้อมคนขับตรัง, " +
      "เช่ารถตู้ท่องเที่ยวตรัง, รถรับส่งสนามบินตรัง ,รถตู้เช่าเหมาตรัง,รถตู้นำเที่ยวตรัง,เช่ารถตู้ตรัง,รถตู้เช่าตรัง,รถตู้เช่าสตูล,สถานที่ท่องเที่ยวตรัง,ตรัง,หาดปากเมง,เช่าเหมารถตู้ตรัง,รับส่งท่าเรือปากบารา,ท่าเรือควนตุ้งกู,รถตู้ท่องเที่ยวตรัง,รถตู้รับปริญญา",
  authors: [{ name: "รถตู้เช่าตรัง" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.vantrangforrent.com/",
  },
  openGraph: {
    title: "รถตู้เช่าตรัง | รถตู้พร้อมคนขับมืออาชีพ ราคาดี",
    description: "🚐 เช่ารถตู้ภาคใต้ พร้อมคนขับมืออาชีพ ปลอดภัย ราคาเริ่มต้น 1800-2500 บาท/วัน บริการครอบคลุมตรัง กระบี่ พัทลุง สตูล",
    type: "website",
    url: "https://www.vantrangforrent.com/",
    images: [
      {
        url: "https://www.vantrangforrent.com/logo.jpg",
        width: 800,
        height: 600,
        alt: 'รถตู้เช่าตรังพร้อมคนขับ',
      },
    ],
    locale: "th_TH",
    siteName: "รถตู้เช่าตรัง",
  },
  twitter: {
    card: "summary_large_image",
    title: "รถตู้เช่าตรัง | รถตู้พร้อมคนขับมืออาชีพ",
    description: "🚐 เช่ารถตู้ภาคใต้ พร้อมคนขับมืออาชีพ ปลอดภัย ราคาเริ่มต้น 2,000 บาท/วัน",
    images: ["https://www.vantrangforrent.com/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        {/* Google Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Force favicon update with direct link tags */}
        <link rel="icon" href="/logo.jpg?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.jpg?v=2" />
          <title></title>
      </head>
      <body className={prompt.className}>
        {children}
        <MessengerChat />
      </body>
    </html>
  );
}
