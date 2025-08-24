import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import React from "react";
import MessengerChat from "../components/MessengerChat";

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
    canonical: "https://www.vantrangforrent.com/",
  },
  openGraph: {
    title: "เช่ารถตู้ตรัง กระบี่ พัทลุง | รถตู้พร้อมคนขับมืออาชีพ ราคาดี",
    description: "🚐 เช่ารถตู้ภาคใต้ พร้อมคนขับมืออาชีพ ปลอดภัย ราคาเริ่มต้น 1800-2500 บาท/วัน บริการครอบคลุมตรัง กระบี่ พัทลุง สตูล",
    type: "website",
    url: "https://www.vantrangforrent.com/",
    images: [
      {
        url: "https://www.vantrangforrent.com/logo.jpg",
        width: 800,
        height: 600,
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
    images: ["https://www.vantrangforrent.com/logo.jpg"],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RentACarStore',
  name: 'รถตู้เช่าตรัง by ตรังแวนเซอร์วิส',
  description: 'บริการรถตู้เช่าตรังพร้อมคนขับมืออาชีพ สำหรับท่องเที่ยว รับส่งสนามบิน และเดินทางทั่วภาคใต้ ปลอดภัย รถใหม่สะอาด บริการ 24 ชั่วโมง',
  url: 'https://www.vantrangforrent.com/',
  telephone: '+66991932345',
  email: 'suchada_2659@hotmail.com',
  image: 'https://www.vantrangforrent.com/logo.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17/18 ม.6 ต.บ้านควน',
    addressLocality: 'เมือง',
    addressRegion: 'ตรัง',
    postalCode: '92140',
    addressCountry: 'TH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '7.526626789744298',
    longitude: '99.63583351308235',
  },
  priceRange: '1800 - 5500 THB',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    'Trang',
    'Krabi',
    'Phatthalung',
    'Satun',
    'Songkhla',
    'Nakhon Si Thammarat',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3', // Based on initial testimonials
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