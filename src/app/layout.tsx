'use client';

import { Prompt } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from "react";
import { jsonLd } from "./data"; // Import jsonLd from data.ts
import MessengerChat from "../components/MessengerChat"; // Import MessengerChat directly

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="th">
      <head>
        <title>รถตู้เช่าตรัง | อันดับ 1 บริการรถตู้พร้อมคนขับมืออาชีพ</title>
        <meta name="description" content="🥇【รถตู้เช่าตรัง】บริการอันดับ 1 ให้เช่ารถตู้พร้อมคนขับมืออาชีพ ✓ปลอดภัย ✓ราคาดีที่สุด เริ่มต้น 1,800 บาท/วัน ✓บริการ 24 ชม. จองเลย!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/logo.jpg?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.jpg?v=2" />
      </head>
      <body className={prompt.className}>
        {children}
        {isMounted && <MessengerChat />}
      </body>
    </html>
  );
}
