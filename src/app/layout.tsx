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
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="รถตู้เช่าตรัง" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="รถตู้เช่าตรัง" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/logo.jpg?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.jpg?v=2" />

        {/* Google Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={prompt.className}>
        {children}
        {isMounted && <MessengerChat />}
      </body>
    </html>
  );
}
