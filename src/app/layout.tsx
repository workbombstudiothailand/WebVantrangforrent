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
  // Add JSON-LD script to metadata using the 'other' property
  other: {
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
      <body className={prompt.className}>
        {children}
        <DynamicMessengerChat />
      </body>
    </html>
  );
}