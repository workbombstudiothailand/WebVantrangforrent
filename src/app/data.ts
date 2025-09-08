import type { Metadata } from "next";

export const services = [
    {
        title: 'Toyota Hiace',
        category: 'Hiace',
        price: '2,500 บาท/วัน',
        image: '/Hiace.jpg',
        features: ['ภายในหรูหรา', 'นั่งสบาย', 'แอร์เย็น', 'รถใหม่']
    },
    {
        title: 'Toyota Commuter All new',
        category: 'Commuter',
        price: '1,800 - 2,000 บาท/วัน',
        image: '/commuterold.jpg',
        features: ['ภายในหรูหรา', 'นั่งสบาย', 'แอร์เย็น', 'รถใหม่']
    },
    {
        title: 'รถตู้หรู VIP Alphard',
        category: 'vip',
        price: '7,500 - 8,500 บาท/วัน',
        image: '/alphardleft.jpg',
        features: ['บริการดี', 'คนขับมืออาชีพ', 'รถสวย สะอาด นั่งสบาย มีระดับ', 'ใส่ใจลูกค้าตลอดการเดินทาง']
    }
];

export const testimonials = [
    { image: '/thkone.jpg' },
    { image: '/thktwo.jpg' },
    { image: '/thkthree.jpg' },
    { image: '/thkfour.jpg' }
];

export const destinations = [
    'ตรัง',
    'กระบี่',
    'พัทลุง',
    'สตูล',
    'สงขลา',
    'นครศรีธรรมราช'
];

export const metadata: Metadata = {
  title: "รถตู้เช่าตรัง | อันดับ 1 บริการรถตู้พร้อมคนขับมืออาชีพ",
  description: "🥇【รถตู้เช่าตรัง】บริการอันดับ 1 ให้เช่ารถตู้พร้อมคนขับมืออาชีพ ✓ปลอดภัย ✓ราคาดีที่สุด เริ่มต้น 1,800 บาท/วัน ✓บริการ 24 ชม. จองเลย!",
  keywords: "รถตู้เช่าตรัง, เช่ารถตู้ตรัง, รถตู้เช่าพร้อมคนขับตรัง, บริการรถตู้เช่าตรัง, รถตู้นำเที่ยวตรัง, เหมารถตู้ตรัง, รถตู้รับส่งสนามบินตรัง, รถตู้เช่าตรังราคาถูก",
  authors: [{ name: "vantrangforrent.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.vantrangforrent.com/",
  },
  openGraph: {
    title: "รถตู้เช่าตรัง | อันดับ 1 บริการรถตู้พร้อมคนขับมืออาชีพ",
    description: "🥇【รถตู้เช่าตรัง】บริการอันดับ 1 ให้เช่ารถตู้พร้อมคนขับมืออาชีพ ✓ปลอดภัย ✓ราคาดีที่สุด เริ่มต้น 1,800 บาท/วัน ✓บริการ 24 ชม. จองเลย!",
    type: "website",
    url: "https://www.vantrangforrent.com/",
    images: [
      {
        url: "https://www.vantrangforrent.com/prwebcorver.jpg",
        width: 800,
        height: 450,
        alt: 'รถตู้เช่าตรังพร้อมคนขับ',
      },
    ],
    locale: "th_TH",
    siteName: "รถตู้เช่าตรัง by vantrangforrent.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "รถตู้เช่าตรัง | อันดับ 1 บริการรถตู้พร้อมคนขับมืออาชีพ",
    description: "🥇【รถตู้เช่าตรัง】บริการอันดับ 1 ให้เช่ารถตู้พร้อมคนขับมืออาชีพ ✓ปลอดภัย ✓ราคาดีที่สุด เริ่มต้น 1,800 บาท/วัน ✓บริการ 24 ชม. จองเลย!",
    images: ["https://www.vantrangforrent.com/prwebcorver.jpg"],
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "url": "https://www.vantrangforrent.com/",
      "name": "รถตู้เช่าตรัง by vantrangforrent.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.vantrangforrent.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "RentACarStore",
      "@id": "https://www.vantrangforrent.com/#organization",
      "name": "รถตู้เช่าตรัง by vantrangforrent.com",
      "description": "บริการรถตู้เช่าตรังพร้อมคนขับมืออาชีพ สำหรับท่องเที่ยว รับส่งสนามบิน และเดินทางทั่วภาคใต้ ปลอดภัย รถใหม่สะอาด บริการ 24 ชั่วโมง",
      "url": "https://www.vantrangforrent.com/",
      "telephone": "+66991932345",
      "email": "suchada_2659@hotmail.com",
      "image": "https://www.vantrangforrent.com/prwebcorver.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17/18 ม.6 ต.บ้านควน",
        "addressLocality": "เมือง",
        "addressRegion": "ตรัง",
        "postalCode": "92000",
        "addressCountry": "TH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "7.526626789744298",
        "longitude": "99.63583351308235"
      },
      "priceRange": "1800 - 8500 THB",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "ตรัง" },
        { "@type": "City", "name": "กระบี่" },
        { "@type": "City", "name": "พัทลุง" },
        { "@type": "City", "name": "สตูล" },
        { "@type": "City", "name": "สงขลา" },
        { "@type": "City", "name": "นครศรีธรรมราช" }
      ],
      "makesOffered": "Toyota",
      "paymentAccepted": "Cash, Bank Transfer",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "บริการรถตู้เช่า",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "เช่ารถตู้ Toyota Hiace พร้อมคนขับ",
              "serviceType": "บริการรถตู้เช่าพร้อมคนขับ",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "เช่ารถตู้ Toyota Commuter พร้อมคนขับ",
              "serviceType": "บริการรถตู้เช่าพร้อมคนขับ",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "เช่ารถตู้ VIP Toyota Alphard พร้อมคนขับ",
              "serviceType": "บริการรถตู้เช่าพร้อมคนขับ",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ราคาเช่ารถตู้ตรังเท่าไหร่?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "อัตราค่าเช่ารถตู้พร้อมคนขับของเราเริ่มต้นที่ 1,800 - 2,500 บาทต่อวันสำหรับรถตู้ Toyota Commuter และ 2,500 บาทต่อวันสำหรับ Toyota Hiace รุ่นใหม่ ส่วนรถตู้หรู VIP Alphard จะมีราคาอยู่ที่ 7,500 - 8,500 บาทต่อวัน ราคาอาจแตกต่างกันไปขึ้นอยู่กับระยะทางและโปรแกรมการเดินทางครับ"
          }
        },
        {
          "@type": "Question",
          "name": "ราคารวมค่าน้ำมันหรือไม่?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ราคาเช่ารถตู้รายวันยังไม่รวมค่าน้ำมัน, ค่าทางด่วน, และค่าจอดรถครับ แต่เรามีบริการเช่ารถตู้แบบรวมน้ำมันสำหรับการรับ-ส่งสนามบินหรือท่าเรือ ซึ่งสามารถสอบถามราคาได้โดยตรงครับ"
          }
        },
        {
          "@type": "Question",
          "name": "กรณีเดินทางหลายวันและค้างคืน คิดค่าใช้จ่ายคนขับอย่างไร?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "สำหรับกรณีค้างคืน ค่าที่พักสำหรับคนขับจะแล้วแต่ความกรุณาของลูกค้าครับ ไม่มีกำหนดตายตัว"
          }
        },
        {
          "@type": "Question",
          "name": "ให้บริการในพื้นที่ไหนบ้าง?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "เราให้บริการรถตู้เช่าพร้อมคนขับครอบคลุมพื้นที่จังหวัดตรังและทุกจังหวัดในภาคใต้ เช่น กระบี่, พัทลุง, สตูล, สงขลา (หาดใหญ่), และนครศรีธรรมราชครับ"
          }
        }
      ]
    }
  ]
};
