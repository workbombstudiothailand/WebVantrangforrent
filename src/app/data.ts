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

// Single source of truth for served provinces
const southernProvinces = [
    "ตรัง",
    "กระบี่",
    "พัทลุง",
    "สตูล",
    "สงขลา",
    "นครศรีธรรมราช",
    "ภูเก็ต",
    "พังงา",
    "สุราษฎร์ธานี",
    "ระนอง",
    "ชุมพร",
    "ปัตตานี",
    "ยะลา",
    "นราธิวาส"
];

// Export for frontend display
export const destinations = southernProvinces.slice(0, 6); // Displaying first 6 for the UI as before

// Centralized FAQ data
export const faqs = [
    {
        question: "ราคาเช่ารถตู้ตรังเท่าไหร่?",
        answer: "อัตราค่าเช่ารถตู้พร้อมคนขับของเรามีดังนี้ครับ:\n- Toyota Commuter: เริ่มต้น 1,800 บาท/วัน\n- Toyota Hiace (รุ่นใหม่): เริ่มต้น 2,500 บาท/วัน\n- VIP Alphard: 7,500 - 8,500 บาท/วัน\nราคาอาจปรับเปลี่ยนตามระยะทางและโปรแกรมการเดินทาง คุณสามารถติดต่อเราเพื่อสอบถามราคาพิเศษและโปรโมชั่นได้เสมอครับ"
    },
    {
        question: "ราคารวมค่าน้ำมันหรือไม่?",
        answer: "สำหรับค่าเช่ารายวันจะยังไม่รวมค่าน้ำมันครับ เพื่อให้ลูกค้ามีความยืดหยุ่นในการวางแผนการเดินทางเอง แต่สำหรับบริการรับ-ส่งสนามบินหรือท่าเรือ เรามีแพ็คเกจเหมารวมน้ำมันในราคาพิเศษที่คุ้มค่ากว่าให้ครับ สามารถสอบถามได้โดยตรงเลย"
    },
    {
        question: "ให้บริการรถตู้เช่าที่ไหนบ้าง?",
        answer: "เราให้บริการครอบคลุมทุกจังหวัดในภาคใต้ครับ ไม่ว่าคุณจะต้องการเดินทางจากตรังไปยังกระบี่, ภูเก็ต, หาดใหญ่, สุราษฎร์ธานี หรือจังหวัดอื่นๆ เราพร้อมให้บริการรับ-ส่งถึงที่ รวมถึงการเดินทางจากสนามบินหลักทุกแห่งในภาคใต้ครับ"
    },
    {
        question: "วิธีการจองรถตู้ทำอย่างไร?",
        answer: "ขั้นตอนการจองง่ายและรวดเร็วมากครับ เพียงโทรหาเราที่ 099-193-2345 หรือแอดไลน์ ID: momay2659 เพื่อแจ้งแผนการเดินทาง ทีมงานของเราจะให้ข้อมูลและยืนยันการจอง จากนั้นเพียงโอนเงินมัดจำ 50% ก็สามารถเตรียมตัวสำหรับการเดินทางที่สะดวกสบายได้เลยครับ"
    },
    {
        question: "กรณีเดินทางหลายวันและค้างคืน คิดค่าใช้จ่ายคนขับอย่างไร?",
        answer: "สำหรับกรณีค้างคืนในการเช่ารถตู้พร้อมคนขับ ค่าที่พักสำหรับคนขับจะแล้วแต่ความกรุณาของลูกค้าครับ ไม่มีกำหนดตายตัว"
    }
];

// SEO Optimized Metadata
export const metadata: Metadata = {
  title: "รถตู้เช่าตรัง(Southern Thailand Van Rental) | Trang Van Hire【No.1】",
  description: "🥇 Your No.1 choice for private van rental with a professional driver in Southern Thailand, including hospital transport services. ✓Safe ✓Reliable ✓English-speaking support. | บริการรถตู้เช่าพร้อมคนขับทั่วภาคใต้ รวมถึงบริการสำหรับโรงพยาบาล ✓ปลอดภัย ✓เชื่อถือได้ จองเลย!",
  keywords: ((keywordGroups) => {
    return Object.values(keywordGroups).flat().join(', ');
  })({
    main: [
    "รถตู้เช่าตรัง", "เช่ารถตู้ตรัง", "รถตู้เช่าพร้อมคนขับตรัง", "ตรังรถตู้เช่า", "รถตู้เช่าตรัง ราคาถูก", "เหมารถตู้ตรัง", "รถตู้เช่าเหมาตรัง", "รถตู้เช่าเมืองตรัง",
    ],
    serviceType: [
    "รถตู้นำเที่ยวตรัง", "รถตู้เช่านำเที่ยวตรัง", "รถตู้ VIP ตรัง", "เช่ารถตู้ท่องเที่ยวตรัง", "รถตู้รับปริญญาตรัง", "รถตู้แห่ขันหมาก", "รถตู้เช่านำเที่ยว", "เที่ยวทั่วไทย",
    ],
    transfer: [
    "รถตู้รับส่งสนามบินตรัง", "รถรับส่งสนามบินตรัง", "รถตู้เช่าสนามบินตรัง", "รถตู้เช่ารับส่งสนามบินตรัง", "เช่ารถตู้ใกล้สนามบินตรัง", "รถตู้รับส่งสนามบินหาดใหญ่", "รถตู้รับส่งสนามบินกระบี่", "รถตู้รับส่งสนามบินภูเก็ต", "รถตู้รับส่งสนามบินนครศรีธรรมราช", "รถตู้รับส่งสนามบินสุราษฎร์ธานี", "รถตู้รับส่งท่าเรือปากบารา", "รถตู้รับส่งท่าเรือ", "เช่ารถตู้ตรังไปหลีเป๊ะ", "รถตู้รับส่งทุกสนามบินภาคใต้",
    ],
    area: [
    "รถตู้เช่ากระบี่", "รถตู้เช่าเกาะลันตา", "รถตู้เช่าหาดใหญ่", "รถตู้เช่าพัทลุง", "รถตู้เช่าสตูล", "รถตู้เช่านครศรีธรรมราช", "รถตู้เช่าภูเก็ต", "รถตู้เช่าพังงา", "รถตู้เช่าสุราษฎร์ธานี", "รถตู้เช่าสมุย", "รถตู้เช่าระนอง", "รถตู้เช่าชุมพร", "รถตู้เช่าสงขลา", "รถตู้เช่าปัตตานี", "รถตู้เช่านราธิวาส", "รถตู้เช่ายะลา",
    ],
    b2b: [
      "รถตู้เช่าสำหรับบริษัท", "รถตู้เช่าสำหรับโรงแรม", "รถตู้รับส่งพนักงาน", "เช่ารถตู้ดูงาน", "เช่ารถตู้สัมมนา", "บริการรถตู้สำหรับหน่วยงานราชการ",
    ],
    events: [
    "รถตู้เช่างานแต่ง", "รถตู้เช่างานบวช", "เช่ารถตู้ไปคอนเสิร์ต", "รถตู้สำหรับกองถ่าย", "เช่ารถตู้สำหรับทริปตีกอล์ฟ",
    ],
    problemSolution: [
    "เดินทางในตรังกลุ่มใหญ่", "วิธีเที่ยวภาคใต้กับครอบครัว", "การเดินทางจากสนามบินภูเก็ตไปจังหวัดอื่น", "รถสำหรับเดินทางหลายคน",
    ],
    hospital: [
      "รถตู้เช่าสำหรับโรงพยาบาล", "รถตู้รับส่งผู้ป่วย", "รถตู้รับส่งบุคลากรทางการแพทย์", "เช่ารถตู้โรงพยาบาล",
    ],
    vehicleType: [
    "รถตู้เช่าตรัง VIP", "รถตู้เช่า VIP ตรัง", "รถ Alphard เช่าตรัง", "รถตู้ Allnew VIP", "รถตู้ Hiace commuter", "รถตู้ Allnew VIP 8-9 ที่นั่ง", "รถตู้Hiace commuter VIP 8-9 ที่นั่ง", "รถตู้ vip 8 ที่นั่งตรัง", "รถตู้เช่า vip 9 ที่นั่งตรัง", "รถตู้เช่า VIP 10 ที่นั่งตรัง",
    ],
    longTail: [
    "เช่ารถตู้ตรังพร้อมคนขับราคาเท่าไหร่", "จองรถตู้เที่ยวตรัง", "บริการรถตู้พร้อมคนขับภาคใต้", "เช่ารถตู้สำหรับครอบครัว",
    ],
    english: [
    "Southern Thailand van rental", "private driver Thailand", "Trang van hire", "Krabi airport transfer", "Phuket van service", "Hat Yai airport transfer", "Surat Thani airport transfer",
    "van rental with driver Thailand", "car rental with driver Phuket", "private van tour Krabi", "Trang airport to Koh Lanta", "Trang to Pak Bara Pier van", "English speaking driver Thailand",
    "Thailand private transport", "rent a van in Trang", "hire driver in Southern Thailand", "best way to travel Southern Thailand"
  ]}),
  authors: [{ name: "vantrangforrent.com" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.vantrangforrent.com/",
  },
  openGraph: {
    title: "Southern Thailand Van Rental with Driver | Vantrangforrent.com",
    description: "🥇 Your No.1 choice for private van rental with a professional driver in Southern Thailand, including hospital transport services. ✓Safe ✓Reliable ✓English-speaking support. | บริการรถตู้เช่าพร้อมคนขับมืออาชีพทั่วภาคใต้ รวมถึงบริการสำหรับโรงพยาบาล",
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
    title: "Southern Thailand Van Rental with Driver | Vantrangforrent.com",
    description: "🥇 Your No.1 choice for private van rental with a professional driver in Southern Thailand, including hospital transport services. ✓Safe ✓Reliable ✓English-speaking support. | บริการรถตู้เช่าพร้อมคนขับมืออาชีพทั่วภาคใต้ รวมถึงบริการสำหรับโรงพยาบาล",
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
      "inLanguage": [
        "th",
        "en"
      ],
      "name": "รถตู้เช่าภาคใต้ - Vantrangforrent.com (ตรัง)",
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
      "name": "Vantrangforrent.com (Southern Thailand Van Rental)",
      "branchCode": "Trang",
      "description": "No.1 private van rental service with a professional driver based in Trang, serving all of Southern Thailand. We specialize in airport transfers, private tours, and dedicated transport services for hospitals, including patient and medical staff transfers. Safe, reliable, 24/7 service with English-speaking support.",
      "slogan": "พันธมิตรการเดินทางที่เชื่อถือได้สำหรับธุรกิจและทัวร์ทั่วภาคใต้",
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
      "hasMap": "https://www.google.com/maps?cid=13813654561153556000",
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
      "knowsLanguage": [
        "en",
        "th"
      ],
      "areaServed": southernProvinces.map(province => ({ "@type": "City", "name": province })),
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
              "image": "https://www.vantrangforrent.com/hiace.jpg",
              "description": "เหมาะสำหรับกลุ่มเพื่อนและครอบครัวที่ต้องการความสบายและพื้นที่กว้างขวางในการเดินทาง",
              "keywords": "Toyota Hiace, รถตู้เช่า 10 ที่นั่ง",
              "serviceType": "บริการรถตู้เช่าพร้อมคนขับ",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "name": "ตรัง"
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
              "image": "https://www.vantrangforrent.com/commuterold.jpg",
              "description": "ตัวเลือกที่คุ้มค่าและเชื่อถือได้สำหรับกรุ๊ปทัวร์และการเดินทางที่ต้องการความคล่องตัว",
              "keywords": "Toyota Commuter, รถตู้เช่า 9 ที่นั่ง, รถตู้เช่าราคาถูก",
              "serviceType": "บริการรถตู้เช่าพร้อมคนขับ",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "name": "ตรัง"
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
              "image": "https://www.vantrangforrent.com/alphardleft.jpg",
              "description": "ที่สุดแห่งความหรูหราและความเป็นส่วนตัวสำหรับผู้บริหาร, แขกคนสำคัญ, หรือวันพิเศษของคุณ",
              "keywords": "รถตู้ VIP ตรัง, รถ Alphard เช่าตรัง, รถตู้ผู้บริหาร",
              "serviceType": "บริการรถตู้เช่าพร้อมคนขับ",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            },
            "areaServed": {
              "@type": "City",
              "name": "ตรัง"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "7500",
              "priceCurrency": "THB",
              "valueAddedTaxIncluded": false,
              "unitText": "ต่อวัน"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "บริการรถตู้สำหรับโรงพยาบาล",
              "description": "บริการรถตู้เช่าพร้อมคนขับสำหรับโรงพยาบาลโดยเฉพาะ สำหรับการรับ-ส่งผู้ป่วย, บุคลากรทางการแพทย์, หรือการเดินทางเพื่อดูงานและสัมมนาทางการแพทย์",
              "keywords": "รถตู้รับส่งผู้ป่วย, รถตู้เช่าโรงพยาบาล, บริการรถตู้ทางการแพทย์",
              "serviceType": "บริการรถตู้เช่าสำหรับองค์กร",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "ภาคใต้"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "THB"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "บริการรถตู้สำหรับพันธมิตรธุรกิจ (โรงแรม, บริษัททัวร์)",
              "description": "เรามีข้อเสนอพิเศษสำหรับพาร์ทเนอร์โรงแรมและบริษัททัวร์ที่ต้องการบริการรถตู้ที่เชื่อถือได้และเป็นมืออาชีพสำหรับรับ-ส่งแขกและลูกค้าคนสำคัญ",
              "keywords": "รถตู้สำหรับโรงแรม, รถตู้สำหรับบริษัททัวร์, B2B van service Thailand, corporate van rental",
              "serviceType": "บริการรถตู้เช่าสำหรับองค์กร",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "ภาคใต้"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "THB"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "บริการรถตู้สำหรับองค์กรและอีเวนต์",
              "description": "ให้บริการรถตู้เช่าสำหรับองค์กร, การเดินทางเพื่อธุรกิจ, การรับส่งพนักงาน, การจัดสัมมนา, และการบริการสำหรับกองถ่ายทำและงานอีเวนต์ทุกประเภท",
              "keywords": "corporate van rental, event transportation, business travel van, employee shuttle service",
              "serviceType": "บริการรถตู้เช่าสำหรับองค์กร",
              "provider": {"@id": "https://www.vantrangforrent.com/#organization"}
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "ภาคใต้"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "THB"
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