import { Prompt } from "next/font/google";
import "./globals.css";
import React from "react";
import { metadata, jsonLd } from "./data"; // Import metadata and jsonLd from data.ts
import MessengerChat from "../components/MessengerChat"; // Import MessengerChat directly

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

// Re-export metadata as required by Next.js
export { metadata };

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