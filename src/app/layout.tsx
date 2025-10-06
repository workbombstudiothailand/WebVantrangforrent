import { Prompt } from "next/font/google";
import "./globals.css";
import React from "react";
import { jsonLd } from "./data"; // Import jsonLd from data.ts
import DynamicMessengerChat from "../components/DynamicMessengerChat"; // Import the new client component

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
  return (
    <html lang="th">
      <head>
          <meta name="google-site-verification" content="JECq8sB5kzFEgQlY7Ys_YNKGL-UnHXtAMA02i-sw-sw" />
        <title>รถตู้เช่าตรัง | อันดับ 1 บริการรถตู้พร้อมคนขับมืออาชีพ</title>
        <meta name="description" content="🥇【รถตู้เช่าตรัง】บริการอันดับ 1 ให้เช่ารถตู้พร้อมคนขับมืออาชีพ ✓ปลอดภัย ✓ราคาดีที่สุด เริ่มต้น 1,800 บาท/วัน ✓บริการ 24 ชม. จองเลย!" />

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
        <DynamicMessengerChat />
      </body>
    </html>
  );
}