import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import React from "react";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "รถตู้เช่าตรัง | รถตู้พร้อมคนขับมืออาชีพ",
  description: "🚐 เช่ารถตู้ตรัง กระบี่ พัทลุง สตูล นครศรีธรรมราช พร้อมคนขับมืออาชีพ ปลอดภัย ราคาเริ่มต้น 2,000 บาท/วัน บริการ 24 ชม. จองง่าย ได้เลย!",
  keywords: "เช่ารถตู้ตรัง, เช่ารถตู้กระบี่, เช่ารถตู้พัทลุง, รถตู้พร้อมคนขับ, รถตู้เช่าภาคใต้, เช่ารถตู้สตูล, เช่ารถตู้นครศรีธรรมราช, รถตู้ท่องเที่ยว, รถตู้ราคาถูก, บริการรถตู้, van rental trang, เช่ารถตู้ถ้ำมรกต, เช่ารถตู้เกาะมุก",
  authors: [{ name: "ตรังแวนเซอร์วิส" }],
  robots: "index, follow",
  alternates: {
    canonical: "http://www.vantrangforrent.com/",
  },
  openGraph: {
    title: "เช่ารถตู้ตรัง กระบี่ พัทลุง | รถตู้พร้อมคนขับมืออาชีพ ราคาดี",
    description: "🚐 เช่ารถตู้ภาคใต้ พร้อมคนขับมืออาชีพ ปลอดภัย ราคาเริ่มต้น 1800-2500 บาท/วัน บริการครอบคลุมตรัง กระบี่ พัทลุง สตูล",
    type: "website",
    url: "http://www.vantrangforrent.com/",
    images: [
      {
        url: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: 'รถตู้เช่าพร้อมคนขับ ตรังแวนเซอร์วิส',
      },
    ],
    locale: "th_TH",
    siteName: "ตรังแวนเซอร์วิส",
  },
  twitter: {
    card: "summary_large_image",
    title: "เช่ารถตู้ตรัง กระบี่ พัทลุง | รถตู้พร้อมคนขับมืออาชีพ",
    description: "🚐 เช่ารถตู้ภาคใต้ พร้อมคนขับมืออาชีพ ปลอดภัย ราคาเริ่มต้น 2,000 บาท/วัน",
    images: ["https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={prompt.className}>{children}</body>
    </html>
  );
}