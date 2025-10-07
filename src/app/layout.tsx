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
  // Add Content Security Policy (CSP) for enhanced security
  other: {
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://www.tiktok.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.fbcdn.net; frame-src 'self' https://www.facebook.com https://www.tiktok.com; connect-src 'self' https://www.facebook.com;",
    'application/ld+json': JSON.stringify(jsonLd)
  },
  // Add JSON-LD script to metadata using the 'other' property
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={prompt.className}>
        {children}
        <DynamicMessengerChat />
      </body>
    </html>
  );
}