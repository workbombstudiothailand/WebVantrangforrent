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

// Centralized FAQ data
export const faqs = [
    {
        question: "ราคาเช่ารถตู้ตรังเท่าไหร่?",
        answer: "อัตราค่าเช่ารถตู้ตรังพร้อมคนขับของเราเริ่มต้นที่ 1,800 บาทต่อวันสำหรับรถตู้ Toyota Commuter และ 2,500 บาทต่อวันสำหรับ Toyota Hiace รุ่นใหม่ ส่วนรถตู้หรู VIP Alphard จะมีราคาอยู่ที่ 7,500 - 8,500 บาทต่อวัน ราคาอาจแตกต่างกันไปขึ้นอยู่กับระยะทางและโปรแกรมการเดินทางครับ หากต้องการเช่ารถตู้ตรังราคาถูก สามารถติดต่อเพื่อสอบถามโปรโมชั่นพิเศษได้ครับ"
    },
    {
        question: "ราคารวมค่าน้ำมันหรือไม่?",
        answer: "ราคาเช่ารถตู้รายวันยังไม่รวมค่าน้ำมัน, ค่าทางด่วน, และค่าจอดรถครับ แต่เรามีบริการเหมารถตู้ตรังแบบรวมน้ำมันสำหรับการรับ-ส่งสนามบินหรือท่าเรือ ซึ่งสามารถสอบถามราคาได้โดยตรงครับ"
    },
    {
        question: "ให้บริการรถตู้เช่าที่ไหนบ้าง?",
        answer: "เราให้บริการรถตู้เช่าพร้อมคนขับครอบคลุมพื้นที่จังหวัดตรังและทุกจังหวัดในภาคใต้ เช่น รถตู้เช่ากระบี่, รถตู้เช่าพัทลุง, รถตู้เช่าสตูล, และรถตู้เช่าหาดใหญ่ รวมถึงบริการรถรับส่งสนามบินตรัง, หาดใหญ่ และกระบี่ครับ"
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
  title: "รถตู้เช่าตรัง พร้อมคนขับ | บริการรถตู้นำเที่ยว VIP รับส่งสนามบิน",
  description: "มองหารถตู้เช่าตรังอยู่ใช่ไหม? บริการเช่ารถตู้พร้อมคนขับอันดับ 1 ในตรัง มีรถตู้ VIP ให้เช่าสำหรับนำเที่ยว รับส่งสนามบินตรัง หาดใหญ่ กระบี่ ราคาถูก เริ่มต้น 1,800 บาท จองเลย!",
  keywords: "รถตู้เช่าตรัง, เช่ารถตู้ตรัง, รถตู้เช่าพร้อมคนขับตรัง, ตรังรถตู้เช่า, รถตู้เช่าตรัง ราคาถูก, เหมารถตู้ตรัง, รถตู้นำเที่ยวตรัง, รถตู้ VIP ตรัง, รถตู้รับส่งสนามบินตรัง, รถตู้รับส่งสนามบินหาดใหญ่, รถตู้รับส่งสนามบินกระบี่, รถตู้เช่ากระบี่, รถตู้เช่าหาดใหญ่, รถตู้เช่าพัทลุง, รถตู้เช่าสตูล, เช่ารถตู้ท่องเที่ยวตรัง, รับส่งท่าเรือปากบารา, รถตู้รับปริญญา",
  authors: [{ name: "vantrangforrent.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.vantrangforrent.com/",
  },
  openGraph: {
    title: "รถตู้เช่าตรัง พร้อมคนขับ | บริการรถตู้นำเที่ยว VIP รับส่งสนามบิน",
    description: "บริการเช่ารถตู้พร้อมคนขับอันดับ 1 ในตรัง มีรถตู้ VIP ให้เช่าสำหรับนำเที่ยว รับส่งสนามบินตรัง หาดใหญ่ กระบี่ ราคาถูก เริ่มต้น 1,800 บาท จองเลย!",
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
    siteName: "รถตู้เช่าตรัง by vantrangforrent.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "รถตู้เช่าตรัง พร้อมคนขับ | บริการรถตู้นำเที่ยว VIP รับส่งสนามบิน",
    description: "บริการเช่ารถตู้พร้อมคนขับอันดับ 1 ในตรัง มีรถตู้ VIP ให้เช่าสำหรับนำเที่ยว รับส่งสนามบินตรัง หาดใหญ่ กระบี่ ราคาถูก เริ่มต้น 1,800 บาท จองเลย!",
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
      "name": "รถตู้เช่าตรัง by vantrangforrent.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.vantrangforrent.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "หน้าแรก",
        "item": "https://www.vantrangforrent.com/"
      }]
    },
    {
      "@type": "RentACarStore",
      "@id": "https://www.vantrangforrent.com/#organization",
      "name": "รถตู้เช่าตรัง by vantrangforrent.com",
      "description": "บริการรถตู้เช่าตรังพร้อมคนขับ สำหรับนำเที่ยว, รับส่งสนามบินตรัง, หาดใหญ่, กระบี่ และเดินทางทั่วภาคใต้ เรามีรถตู้ VIP ให้บริการในราคาถูก ปลอดภัย บริการ 24 ชั่วโมง",
      "slogan": "เช่ารถตู้ตรัง ต้อง Vantrangforrent.com บริการดี มีรถตู้ VIP คนขับมืออาชีพ",
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "89"
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
