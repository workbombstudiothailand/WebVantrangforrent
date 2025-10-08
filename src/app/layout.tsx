import { Prompt } from "next/font/google";
import "./globals.css";
import React from "react";
import { metadata as appMetadata, jsonLd } from "./data"; // Import metadata and jsonLd from data.ts
import DynamicMessengerChat from "../components/DynamicMessengerChat"; // Import the new client component
import type { Metadata } from "next";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  ...appMetadata,
  verification: {
    google: "JECq8sB5kzFEgQlY7Ys_YNKGL-UnHXtAMA02i-sw-sw",
  },
  // Add Content Security Policy (CSP) and other metadata
  other: {
    // Stricter CSP for better security
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' https://connect.facebook.net https://www.tiktok.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.fbcdn.net; frame-src 'self' https://www.facebook.com https://www.tiktok.com; connect-src 'self' https://www.facebook.com https://*.tiktok.com;",
    'application/ld+json': JSON.stringify(jsonLd)
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
        <title>รถตู้ให้เช่าตรัง พร้อมคนขับ รีวิวเยี่ยม ราคาดี | VanTrangForRent</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://web-vantrangforrent.vercel.app/" />
        <meta name="description" content="บริการรถตู้ให้เช่าพร้อมคนขับในตรังและภาคใต้ ราคาดี รีวิวเยี่ยม ปลอดภัย สะดวกสบาย" />
        <meta property="og:title" content="รถตู้ให้เช่าตรัง พร้อมคนขับ รีวิวเยี่ยม ราคาดี" />
        <meta property="og:description" content="บริการรถตู้ให้เช่าพร้อมคนขับในตรังและภาคใต้ ราคาดี รีวิวเยี่ยม ปลอดภัย สะดวกสบาย" />
        <meta property="og:image" content="https://web-vantrangforrent.vercel.app/public/logo.jpg" />
        <meta property="og:url" content="https://web-vantrangforrent.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="รถตู้ให้เช่าตรัง พร้อมคนขับ รีวิวเยี่ยม ราคาดี" />
        <meta name="twitter:description" content="บริการรถตู้ให้เช่าพร้อมคนขับในตรังและภาคใต้ ราคาดี รีวิวเยี่ยม ปลอดภัย สะดวกสบาย" />
        <meta name="twitter:image" content="https://web-vantrangforrent.vercel.app/public/logo.jpg" />
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={prompt.className}>
        {children}
        <DynamicMessengerChat />
      </body>
    </html>
  );
}