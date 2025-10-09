import type { Metadata } from "next";

export const services = [
    {
        title: 'Toyota Hiace',
        category: 'hiace',
        price: '2,500 บาท/วัน',
        image: '/hiace.jpg',
        features: ['ภายในหรูหรา', 'นั่งสบาย', 'แอร์เย็น', 'รถใหม่']
    },
    {
        title: 'Toyota Commuter All new',
        category: 'commuter',
        price: '1,800 - 2,000 บาท/วัน',
        image: '/commuterold.jpg',
        features: ['ภายในหรูหรา', 'นั่งสบาย', 'แอร์เย็น', 'รถใหม่']
    },
    {
        title: 'รถตู้หรู VIP Alphard',
        category: 'vip', // Already lowercase, which is good
        price: '7,500 - 8,500 บาท/วัน',
        image: '/alphardleft.jpg',
        features: ['บริการดี', 'คนขับมืออาชีพ', 'รถสวย สะอาด นั่งสบาย มีระดับ', 'ใส่ใจลูกค้าตลอดการเดินทาง']
    }
];

export const testimonials = [
    { image: '/thkone.jpg', description: "รีวิวจากลูกค้าเรื่องการบริการที่ดีและคนขับสุภาพ" },
    { image: '/thktwo.jpg', description: "รีวิวจากลูกค้าเรื่องความตรงต่อเวลาในการรับส่งสนามบิน" },
    { image: '/thkthree.jpg', description: "รีวิวจากลูกค้าเรื่องความสะอาดของรถและความสบายในการเดินทาง" },
    { image: '/thkfour.jpg', description: "รีวิวจากลูกค้าเรื่องความชำนาญเส้นทางของคนขับ" }
];

export const carSlides = [
    // Hiace
    { id: 1, image: "/hiace.jpg", category: "hiace" },
    { id: 2, image: "/hiace2.jpg", category: "hiace" },
    { id: 3, image: "/hiace3.jpg", category: "hiace" },
    { id: 4, image: "/hiace4.jpg", category: "hiace" },
    { id: 5, image: "/hiace5.jpg", category: "hiace" },
    { id: 6, image: "/hiace6.jpg", category: "hiace" },
    { id: 7, image: "/hiace7.jpg", category: "hiace" },
    { id: 8, image: "/hiace8.jpg", category: "hiace" },

    // Commuter
    { id: 9, image: "/commuterold.jpg", category: "commuter" },
    { id: 10, image: "/commuterold-2.jpg", category: "commuter" },
    { id: 11, image: "/commuterold-3.jpg", category: "commuter" },
    { id: 12, image: "/commuterold-4.jpg", category: "commuter" },
    { id: 13, image: "/commuterold-5.jpg", category: "commuter" },
    { id: 14, image: "/commuterold-6.jpg", category: "commuter" },
    { id: 15, image: "/commuterold-7.jpg", category: "commuter" },
    { id: 16, image: "/commuterold-8.jpg", category: "commuter" },

    // รถตู้ VIP
    { id: 17, image: "/alphardleft.jpg", category: "vip" },
    { id: 18, image: "/alphardright.jpg", category: "vip" },
];

export const destinations = [
    'ตรัง',
    'กระบี่',
    'พัทลุง',
    'สตูล',
    'สงขลา',
    'นครศรีธรรมราช'
];

// Centralized FAQ data
export const faqs = [
    {
        question: "ราคาเช่ารถตู้ตรังเท่าไหร่?",
        answer: "อัตราค่าเช่ารถตู้ตรังพร้อมคนขับของเราเริ่มต้นที่ 1,800 บาทต่อวันสำหรับ Toyota Commuter และ 2,500 บาทต่อวันสำหรับ Toyota Hiace รุ่นใหม่ ส่วนรถตู้หรู VIP Alphard จะมีราคาอยู่ที่ 7,500 - 8,500 บาทต่อวันครับ ราคาอาจแตกต่างกันไปขึ้นอยู่กับระยะทางและโปรแกรมการเดินทาง หากต้องการเช่ารถตู้ตรังราคาถูก สามารถติดต่อเพื่อสอบถามโปรโมชั่นพิเศษได้โดยตรงครับ"
    },
    {
        question: "ราคารวมค่าน้ำมันหรือไม่?",
        answer: "ราคาเช่ารถตู้รายวันยังไม่รวมค่าน้ำมัน, ค่าทางด่วน, และค่าจอดรถครับ แต่เรามีบริการเหมารถตู้ตรังแบบรวมน้ำมันสำหรับการรับ-ส่งสนามบินตรัง, หาดใหญ่, กระบี่ หรือท่าเรือปากบารา ซึ่งสามารถสอบถามราคาพิเศษได้โดยตรงครับ"
    },
    {
        question: "ให้บริการรถตู้เช่าที่ไหนบ้าง?",
        answer: "เราให้บริการรถตู้เช่าพร้อมคนขับครอบคลุมพื้นที่จังหวัดตรังและทุกจังหวัดในภาคใต้ เช่น รถตู้เช่ากระบี่, รถตู้เช่าพัทลุง, รถตู้เช่าสตูล, และรถตู้เช่าหาดใหญ่ รวมถึงบริการรถรับส่งสนามบินตรัง, หาดใหญ่ และกระบี่ เพื่อเดินทางต่อไปยังสถานที่ต่างๆ เช่น ท่าเรือปากบารา หรือตัวเมืองครับ"
    },
    {
        question: "วิธีการจองรถตู้ทำอย่างไร?",
        answer: "คุณสามารถจองรถตู้เช่าของเราได้ง่ายๆ โดยการโทรติดต่อที่เบอร์ 099-193-2345 หรือแอดไลน์ ID: momay2659 เพื่อสอบถามข้อมูลและยืนยันการจอง จากนั้นโอนเงินมัดจำ 50% เพื่อยืนยันการจองรถครับ"
    },
    {
        question: "กรณีเดินทางหลายวันและค้างคืน คิดค่าใช้จ่ายคนขับอย่างไร?",
        answer: "สำหรับกรณีค้างคืนในการเช่ารถตู้พร้อมคนขับ ค่าที่พักสำหรับคนขับจะแล้วแต่ความกรุณาของลูกค้าครับ ไม่มีกำหนดตายตัว"
    }
];

// SEO Optimized Metadata
export const metadata: Metadata = {
  title: "รถตู้เช่าตรัง【อันดับ 1】พร้อมคนขับ | เริ่ม 1,800.- บริการ 24 ชม.",
  description: "🥇【รถตู้เช่าตรัง】บริการอันดับ 1 ✓เช่ารถตู้พร้อมคนขับมืออาชีพ ✓ปลอดภัย ✓ราคาดีที่สุด เริ่มต้น 1,800 บาท/วัน ✓บริการ 24 ชม. จองเลย!",
  keywords: [
    // คีย์เวิร์ดหลัก
    "รถตู้เช่าตรัง", "เช่ารถตู้ตรัง", "รถตู้เช่าพร้อมคนขับตรัง", "ตรังรถตู้เช่า", "รถตู้เช่าตรัง ราคาถูก", "เหมารถตู้ตรัง", "รถตู้เช่าเหมาตรัง", "รถตู้เช่าเมืองตรัง",
    
    // คีย์เวิร์ดตามประเภทบริการ
    "รถตู้นำเที่ยวตรัง", "รถตู้เช่านำเที่ยวตรัง", "รถตู้ VIP ตรัง", "เช่ารถตู้ท่องเที่ยวตรัง", "รถตู้รับปริญญาตรัง", "รถตู้แห่ขันหมาก", "รถตู้เช่านำเที่ยว", "เที่ยวทั่วไทย",
    
    // คีย์เวิร์ดรับ-ส่ง
    "รถตู้รับส่งสนามบินตรัง", "รถรับส่งสนามบินตรัง", "รถตู้เช่าสนามบินตรัง", "รถตู้เช่ารับส่งสนามบินตรัง", "เช่ารถตู้ใกล้สนามบินตรัง", "รถตู้รับส่งสนามบินหาดใหญ่", "รถตู้รับส่งสนามบินกระบี่", "รถตู้รับส่งท่าเรือปากบารา", "รถตู้รับส่งท่าเรือ", "เช่ารถตู้ตรังไปหลีเป๊ะ",
    
    // คีย์เวิร์ดตามพื้นที่ใกล้เคียง
    "รถตู้เช่ากระบี่", "รถตู้เช่าหาดใหญ่", "รถตู้เช่าพัทลุง", "รถตู้เช่าสตูล", "รถตู้เช่านครศรีธรรมราช",
    
    // คีย์เวิร์ดตามประเภทรถและที่นั่ง
    "รถตู้เช่าตรัง VIP", "รถตู้เช่า VIP ตรัง", "รถ Alphard เช่าตรัง", "รถตู้ Allnew VIP", "รถตู้ Hiace commuter", "รถตู้ Allnew VIP 8-9 ที่นั่ง", "รถตู้Hiace commuter VIP 8-9 ที่นั่ง", "รถตู้ vip 8 ที่นั่งตรัง", "รถตู้เช่า vip 9 ที่นั่งตรัง", "รถตู้เช่า VIP 10 ที่นั่งตรัง",

    // คีย์เวิร์ดเชิงอธิบาย (Long-tail)
    "เช่ารถตู้ตรังพร้อมคนขับราคาเท่าไหร่", "จองรถตู้เที่ยวตรัง", "บริการรถตู้พร้อมคนขับภาคใต้", "เช่ารถตู้สำหรับครอบครัว",

    // คีย์เวิร์ดสำหรับลูกค้าองค์กร (B2B)
    "รถตู้เช่าสำหรับบริษัท", "รถตู้เช่าสำหรับโรงแรม", "รถตู้รับส่งพนักงาน", "เช่ารถตู้ดูงาน", "เช่ารถตู้สัมมนา", "บริการรถตู้สำหรับหน่วยงานราชการ"
  ].join(', '),
  authors: [{ name: "vantrangforrent.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.vantrangforrent.com/",
  },
  openGraph: {
    title: "รถตู้เช่าตรัง【อันดับ 1】พร้อมคนขับ | เริ่ม 1,800.- บริการ 24 ชม.",
    description: "🥇【รถตู้เช่าตรัง】บริการอันดับ 1 ✓เช่ารถตู้พร้อมคนขับมืออาชีพ ✓ปลอดภัย ✓ราคาดีที่สุด เริ่มต้น 1,800 บาท/วัน ✓บริการ 24 ชม. จองเลย!",
    type: "website",
    url: "https://www.vantrangforrent.com/",
    images: [
      {
        url: "https://www.vantrangforrent.com/prwebcorver.jpg",
        width: 1200,
        height: 630,
        alt: 'รถตู้เช่าตรังพร้อมคนขับ - Vantrangforrent.com',
      },
    ],
    locale: "th_TH",
    siteName: "รถตู้เช่าตรัง - Vantrangforrent.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "รถตู้เช่าตรัง【อันดับ 1】พร้อมคนขับ | เริ่ม 1,800.- บริการ 24 ชม.",
    description: "🥇【รถตู้เช่าตรัง】บริการอันดับ 1 ✓เช่ารถตู้พร้อมคนขับมืออาชีพ ✓ปลอดภัย ✓ราคาดีที่สุด เริ่มต้น 1,800 บาท/วัน ✓บริการ 24 ชม. จองเลย!",
    images: ["https://www.vantrangforrent.com/prwebcorver.jpg"],
  },
};

// SEO Optimized JSON-LD Schema
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "url": "https://www.vantrangforrent.com/",
      "name": "รถตู้เช่าตรัง - Vantrangforrent.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.vantrangforrent.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@id": "https://www.vantrangforrent.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "หน้าแรก",
          "item": "https://www.vantrangforrent.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "บริการของเรา",
          "item": "https://www.vantrangforrent.com/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "รีวิวลูกค้า",
          "item": "https://www.vantrangforrent.com/#testimonials"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "คำถามที่พบบ่อย",
          "item": "https://www.vantrangforrent.com/#faq"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "ติดต่อเรา",
          "item": "https://www.vantrangforrent.com/#contact"
        }
      ],
      "provider": {
        "@id": "https://www.vantrangforrent.com/#organization"
      }
    },
    {
      "@type": "RentACarStore",
      "@id": "https://www.vantrangforrent.com/#organization",
      "name": "รถตู้เช่าตรัง - Vantrangforrent.com",
      "description": "ผู้ให้บริการรถตู้เช่าพร้อมคนขับมืออาชีพอันดับ 1 ในจังหวัดตรัง ให้บริการครอบคลุมการเดินทางทุกรูปแบบ ทั้งการนำเที่ยว, การรับส่งสนามบิน (ตรัง, หาดใหญ่, กระบี่), และการเดินทางทั่วภาคใต้ ด้วยรถตู้หลากหลายรุ่นตั้งแต่ Toyota Commuter, Hiace, ไปจนถึงรถ VIP หรูอย่าง Alphard เรามุ่งมั่นให้บริการที่ปลอดภัย, สะดวกสบาย, และเชื่อถือได้ตลอด 24 ชั่วโมง",
      "slogan": "เช่ารถตู้ตรัง ต้อง Vantrangforrent.com บริการดี มีรถตู้ VIP คนขับมืออาชีพ",
      "url": "https://www.vantrangforrent.com/",
      "telephone": "+66991932345",
      "logo": "https://www.vantrangforrent.com/logo.jpg",
      "sameAs": [
        "https://www.facebook.com/andamanTrangThrawel",
        "https://www.tiktok.com/@vantrangforreng"
      ],
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "89",
        "url": "https://www.facebook.com/andamanTrangThrawel/reviews"
      },
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
              "description": "รถตู้รุ่นใหม่ นั่งสบาย สำหรับการเดินทางที่เหนือกว่า",
              "serviceType": "บริการรถตู้เช่าพร้อมคนขับ",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "2500",
              "priceCurrency": "THB",
              "valueAddedTaxIncluded": false,
              "unitText": "ต่อวัน"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "เช่ารถตู้ Toyota Commuter พร้อมคนขับ",
              "description": "รถตู้ขนาดมาตรฐาน ยอดนิยมสำหรับกรุ๊ปทัวร์และครอบครัว",
              "serviceType": "บริการรถตู้เช่าพร้อมคนขับ",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "1800",
              "priceCurrency": "THB",
              "valueAddedTaxIncluded": false,
              "unitText": "ต่อวัน"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "เช่ารถตู้ VIP Toyota Alphard พร้อมคนขับ",
              "description": "ที่สุดของความหรูหราและเป็นส่วนตัว สำหรับแขกคนสำคัญ",
              "serviceType": "บริการรถตู้เช่าพร้อมคนขับ",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "7500",
              "priceCurrency": "THB",
              "valueAddedTaxIncluded": false,
              "unitText": "ต่อวัน"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};