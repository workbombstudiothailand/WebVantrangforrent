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
        category: 'vipAlphard',
        price: '7,500 - 8,500 บาท/วัน',
        image: '/alphardleft.jpg',
        features: ['บริการดี', 'คนขับมืออาชีพ', 'รถสวย สะอาด นั่งสบาย มีระดับ', 'ใส่ใจลูกค้าตลอดการเดินทาง']
    }
];

export const testimonials = [
    {
        image: '/thkone.jpg'
    },
    {
        image: '/thktwo.jpg'
    },
    {
        image: '/thkthree.jpg'
    }
];

export const destinations = [
    'ตรัง',
    'กระบี่',
    'พัทลุง',
    'สตูล',
    'สงขลา',
    'นครศรีธรรมราช'
];

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RentACarStore',
  name: 'รถตู้เช่าตรัง',
  description: 'บริการรถตู้เช่าตรังพร้อมคนขับมืออาชีพ สำหรับท่องเที่ยว รับส่งสนามบิน และเดินทางทั่วภาคใต้ ปลอดภัย รถใหม่สะอาด บริการ 24 ชั่วโมง',
  url: 'https://www.vantrangforrent.com/',
  telephone: '+66991932345',
  email: 'suchada_2659@hotmail.com',
  image: 'https://www.vantrangforrent.com/logo.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17/18 ม.6 ต.บ้านควน',
    addressLocality: 'เมือง',
    addressRegion: 'ตรัง',
    postalCode: '92140',
    addressCountry: 'TH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '7.526626789744298',
    longitude: '99.63583351308235',
  },
  priceRange: '1800 - 5500 THB',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    'Trang',
    'Krabi',
    'Phatthalung',
    'Satun',
    'Songkhla',
    'Nakhon Si Thammarat',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3', // Based on initial testimonials
  },
};
