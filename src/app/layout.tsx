import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import React from "react";
import Script from 'next/script';

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

// We keep the metadata for SEO, but remove the 'icons' part to use the direct <link> method below.
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
      <head>
        {/* Force favicon update with direct link tags */}
        <link rel="icon" href="/logo.jpg?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.jpg?v=2" />
      </head>
      <body className={prompt.className}>
        {children}

        {/* Messenger Chat Plugin Code */}
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>

        <Script id="messenger-chat-plugin" strategy="afterInteractive">
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "100063753571328");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v19.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `}
        </Script>
      </body>
    </html>
  );
}