'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle, MapPin, Users, Shield, Car, ChevronDown } from 'lucide-react';
import { services, destinations, faqs, testimonials } from './data'; // Import all data from data.ts
import SEOContent from '../components/SEOContent'; // Import the SEOContent component

// Dynamically import components for better performance and to avoid SSR issues
const CarSlider = dynamic(() => import('../components/CarSlider'), { ssr: false });
const FacebookPageIframe = dynamic(() => import('../components/FacebookPageIframe'), { ssr: false });
const TikTokEmbed = dynamic(() => import('../components/TikTokEmbed'), { ssr: false });

// Define types for the FAQItem props to fix the TypeScript error
interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

// FAQItem Component for Accordion
const FAQItem: React.FC<FAQItemProps> = ({ faq, index, isOpen, onToggle }) => {
  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none"
        onClick={() => onToggle(index)}
      >
        <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
        <ChevronDown className={`w-6 h-6 text-sky-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 px-2 text-gray-600">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0); // Keep the first FAQ open by default

    const handleFaqToggle = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    useEffect(() => {
        // This will run only on the client, after the component mounts
        setIsMounted(true);
    }, []);

    const openSlider = (category: string) => {
        setSelectedCategory(category);
        setIsSliderOpen(true);
    };

    const closeSlider = () => {
        setIsSliderOpen(false);
        setSelectedCategory('');
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
        setActiveSection(sectionId);
    };

    useEffect(() => {
        const sections = ['home', 'services', 'testimonials', 'faq', 'contact'];
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Car className="h-8 w-8 text-sky-600" />
                            <span className="text-xl font-bold text-gray-900">รถตู้เช่าตรัง</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {[
                                { id: 'home', label: 'หน้าแรก' },
                                { id: 'services', label: 'บริการของเรา' },
                                { id: 'testimonials', label: 'รีวิวลูกค้า' },
                                { id: 'faq', label: 'คำถามที่พบบ่อย' },
                                { id: 'contact', label: 'ติดต่อเรา' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm font-medium transition-colors ${
                                        activeSection === item.id
                                            ? 'text-sky-600 border-b-2 border-sky-600'
                                            : 'text-gray-600 hover:text-sky-600'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        {/* Contact Buttons */}
                        <div className="hidden md:flex items-center space-x-3">
                            <a
                                href="tel:0991932345"
                                className="flex items-center justify-center space-x-2 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-all duration-300 transform hover:scale-105"
                            >
                                <Phone className="h-4 w-4" />
                                <span className="font-medium">โทรเลย</span>
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-md text-gray-600 hover:text-sky-600"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {[
                                { id: 'home', label: 'หน้าแรก' },
                                { id: 'services', label: 'บริการของเรา' },
                                { id: 'testimonials', label: 'รีวิวลูกค้า' },
                                { id: 'faq', label: 'คำถามที่พบบ่อย' },
                                { id: 'contact', label: 'ติดต่อเรา' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-sky-600"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="pt-4 pb-2 space-y-2">
                                <a
                                    href="tel:0991932345"
                                    className="flex items-center space-x-2 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-all duration-300 w-full justify-center transform hover:scale-105"
                                >
                                    <Phone className="h-4 w-4" />
                                    <span>โทรเลย</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </header>
            {/* Hero Section */}
            <section id="home" className="pt-16 bg-gradient-to-br from-sky-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                บริการ<br />
                                <span className="text-sky-600">รถตู้เช่าตรัง</span><br/>
                                <span className="text-gray-600">พร้อมคนขับมืออาชีพ</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                <strong>สัมผัสความสะดวกสบายในการเดินทาง ไม่ว่าจะเป็นท่องเที่ยว รับส่ง หรืองานต่างๆปลอดภัย • เชื่อถือได้ • บริการ 24 ชั่วโมง</strong>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a
                                    href="tel:0991932345"
                                    className="flex items-center justify-center space-x-2 bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>โทรจองเลย 099-193-2345</span>
                                </a>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="flex items-center justify-center space-x-2 border border-sky-600 text-sky-600 px-8 py-4 rounded-lg hover:bg-sky-50 transition-all duration-300 font-medium transform hover:scale-105"
                                >
                                    <Car className="h-5 w-5" />
                                    <span>ดูบริการของเรา</span>
                                </button>
                            </div>

                            <div className="mt-8 flex justify-center items-center gap-x-4">
                                <Image
                                    src="/sha.jpg"
                                    alt="sha"
                                    width={150}
                                    height={150}/>
                                <Image
                                    src="/tat.png"
                                    alt="tat"
                                    width={150}
                                    height={150}/>
                            </div>

                            <div className="grid grid-cols-3 gap-8 mt-8">
                                <div className="text-center">
                                    <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg mx-auto mb-2">
                                        <Shield className="h-6 w-6 text-sky-600" />
                                    </div>
                                    <p className="font-semibold text-gray-900">ปลอดภัย</p>
                                    <p className="text-sm text-gray-600">ประกันครบครัน</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg mx-auto mb-2">
                                        <Users className="h-6 w-6 text-sky-600" />
                                    </div>
                                    <p className="font-semibold text-gray-900">มืออาชีพ</p>
                                    <p className="text-sm text-gray-600">คนขับฝีมือดี</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg mx-auto mb-2">
                                        <MapPin className="h-6 w-6 text-sky-600" />
                                    </div>
                                    <p className="font-semibold text-gray-900">ครอบคลูม</p>
                                    <p className="text-sm text-gray-600">ทั่วภาคใต้</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/prwebcorver.jpg"
                                alt="รถตู้สำหรับเช่า"
                                width={800}
                                height={450}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg font-semibold text-gray-900 mb-4">พื้นที่ให้บริการ</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {destinations.map((destination, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-sky-600 border border-sky-200 shadow-sm"
                                >
                                  <MapPin className="h-4 w-4 mr-2" />
                                    {destination}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section */}
            <section id="services" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">บริการของเรา</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            <strong>เรามีบริการรถตู้เช่าตรังที่ครบครันทุกความต้องการในการเดินทาง ไม่ว่าจะเป็นรถตู้นำเที่ยวตรัง, รถตู้เช่าเหมา, หรือรถตู้รับส่งสนามบิน ด้วยรถตู้คุณภาพและคนขับมืออาชีพ รถตู้ของเราทุกคันได้รับการรับรองตามมาตรการความปลอดภัยด้านสาธารณสุข (SHA)</strong>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                                onClick={() => openSlider(service.category)}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    width={500}
                                    height={192}
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-2xl font-bold text-sky-600 mb-4">{service.price}</p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-gray-600">
                                                <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className="w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition-all duration-300 font-medium"
                                    >
                                        ดูรถของเรา
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-8 text-center">อัตราค่าเช่า</h3>
                        <div className="max-w-4xl mx-auto space-y-8">
                            <div className="md:flex md:gap-8 space-y-8 md:space-y-0">
                                <div className="flex-1 bg-white/10 rounded-lg p-6">
                                    <h4 className="text-xl font-bold mb-3">ค่าเช่ารายวัน</h4>
                                    <ul className="space-y-2">
                                        <li><span className="font-semibold text-sky-300">อัตราค่าเช่า:</span> <span
                                            className="font-bold">1,800 - 2,500 บาท/วัน</span></li>
                                        <li><span className="font-semibold text-sky-300">ไม่รวม:</span> ค่าน้ำมัน,
                                            ค่าธรรมเนียม, และค่าผ่านทางต่างๆ
                                        </li>
                                        <li><span className="font-semibold text-sky-300">สำหรับหมู่คณะ:</span> สามารถ<a
                                            href="#contact"
                                            className="underline hover:text-sky-200">ติดต่อเพื่อต่อรองราคา</a>กับเราได้โดยตรง
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex-1 bg-white/10 rounded-lg p-6">
                                    <h4 className="text-xl font-bold mb-3">ค่าเช่ารถตู้รวมน้ำมัน</h4>
                                    <ul className="space-y-2">
                                        <li><span className="font-semibold text-sky-300">สำหรับบริการ:</span> รับ หรือ
                                            ส่ง เพียงขาเดียว (โรงแรม/สนามบิน/ท่าเรือ)
                                        </li>
                                        <li><span
                                            className="font-semibold text-sky-300">เงื่อนไข:</span> กรุณาสอบถามอัตราค่าบริการได้โดยตรง
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:flex md:gap-8 space-y-8 md:space-y-0">
                                <div className="flex-1 bg-white/10 rounded-lg p-6">
                                    <h4 className="text-xl font-bold mb-3">ระยะเวลาให้บริการ</h4>
                                    <ul className="space-y-2">
                                        <li><span className="font-semibold text-sky-300">เวลาปกติ:</span> 06:00 - 20:00
                                            น.
                                        </li>
                                        <li><span
                                            className="font-semibold text-sky-300">การรับก่อนเวลา:</span> หากต้องการให้รับก่อน
                                            06:00 น. กรุณาแจ้งให้ทราบล่วงหน้าในวันที่จอง
                                        </li>
                                        <li><span
                                            className="font-semibold text-sky-300">การเดินทางกลับ:</span> กำหนดให้ถึงปลายทางไม่เกิน
                                            20:00 น.
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex-1 bg-white/10 rounded-lg p-6">
                                    <h4 className="text-xl font-bold mb-3">ค่าบริการล่วงเวลา</h4>
                                    <ul className="space-y-2">
                                        <li><span
                                            className="font-semibold text-sky-300">20:01 - 24:00 น.:</span> คิดเพิ่มชั่วโมงละ <span
                                            className="font-bold">200 บาท</span></li>
                                        <li><span
                                            className="font-semibold text-sky-300">หลัง 24:00 - 02:00 น.:</span> คิดเพิ่ม <span
                                            className="font-bold">1,000 บาท</span></li>
                                        <li><span
                                            className="font-semibold text-sky-300">หลัง 02:00 น.:</span> คิดเป็นราคาเช่าเต็ม
                                            1 วันเต็ม
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                *กรณีค้างคืน (ค่าที่พักแล้วแต่ความกรุณาของลูกค้าค่ะ)*
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">รีวิวลูกค้าเช่ารถตู้</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            ความประทับใจจากลูกค้าที่ใช้บริการ<strong>เช่ารถตู้</strong>กับเราแล้ว
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
                                onClick={() => setSelectedImage(testimonial.image)}
                            >
                                <Image
                                    src={testimonial.image}
                                    alt={`รีวิวจากลูกค้าคนที่ ${index + 1}`}
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">คำถามที่พบบ่อย</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            คำตอบสำหรับทุกข้อสงสัยเกี่ยวกับการเช่ารถตู้ตรังกับเรา
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <FAQItem 
                                key={index} 
                                faq={faq} 
                                index={index} 
                                isOpen={openFaq === index} 
                                onToggle={handleFaqToggle} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">จองรถตู้เช่า ติดต่อเรา</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            พร้อมให้บริการและตอบทุกคำถาม <strong>จองรถตู้ </strong>โทร 099-193-2345 083-641-8519
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">ช่องทางติดต่อ</h3>

                            <div className="space-y-6 mb-8">
                                <a
                                    href="tel:0991932345"
                                    className="flex items-center space-x-4 p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 bg-sky-600 rounded-lg">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">โทรศัพท์</p>
                                        <p className="text-sky-600 font-medium">099-193-2345</p>
                                        <p className="text-sm text-gray-600">บริการ 24 ชั่วโมง</p>
                                    </div>
                                </a>

                                <a
                                    href="https://line.me/ti/p/mNPO2-os_3"
                                    className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg">
                                        <MessageCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">LINE</p>
                                        <p className="text-green-600 font-medium">momay2659</p>
                                        <p className="text-sm text-gray-600">แชทสะดวก ตอบเร็ว</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.facebook.com/andamanTrangThrawel"
                                    className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                                        <Users className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Facebook</p>
                                        <p className="text-blue-600 font-medium">รถตู้เช่าตรัง </p>
                                        <p className="text-sm text-gray-600">ดูผลงานและรีวิว</p>
                                    </div>
                                </a>
                            </div>

                            {/* Time and Location */}
                            <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl p-6 text-white">
                                <h4 className="font-bold text-lg mb-3">เวลาให้บริการ</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>จันทร์ - อาทิตย์</span>
                                        <span>24 ชั่วโมง</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>บริการฉุกเฉิน</span>
                                        <span>ตลอด 24 ชั่วโมง</span>
                                    </div>
                                </div>
                            </div>

                            {/* Facebook Page Iframe under contact info */}
                            <div className="mt-8 rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white w-full max-w-[750px] h-[750px] flex items-center justify-center mx-auto">
                                {isMounted ? <FacebookPageIframe /> : <div className="w-full h-full bg-gray-200 animate-pulse" />}
                            </div>
                        </div>

                        {/* Right Column: Pay Form and TikTok Embed */}
                        <div className="flex flex-col items-center">
                            <div className="rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white w-full max-w-[600px] h-[780px] flex items-center justify-center">
                                {isMounted ? <TikTokEmbed /> : <div className="w-full h-full bg-gray-200 animate-pulse" />}
                            </div>
                            <div className="mt-8 bg-gray-50 rounded-2xl p-8 w-full">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">วิธีการจองและชำระเงิน</h3>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        สามารถติดต่อเราได้ตามช่องทางด้านล่างนี้เพื่อทำการจองและสอบถามข้อมูลเพิ่มเติม:
                                    </p>
                                    <ul className="list-none space-y-2 pl-4">
                                        <li><strong>โทรศัพท์:</strong> <a href="tel:0991932345" className="text-sky-600 hover:underline">099-1932345</a> หรือ <a href="tel:0836418519" className="text-sky-600 hover:underline">083-6418519</a></li>
                                        <li><strong>Line ID:</strong> momoy2659</li>
                                    </ul>
                                    <p>
                                        เมื่อยืนยันการจองแล้ว ท่านจะได้รับข้อมูลเพื่อโอนเงินมัดจำจำนวน 50% ของยอดทั้งหมด
                                    </p>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800 mb-2">รายละเอียดการชำระเงินมัดจำ</h4>
                                        <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-1">
                                            <p><strong>ชื่อบัญชี:</strong> นางสาวสุชาดา ชั้นสกุล</p>
                                            <p><strong>เลขที่บัญชี:</strong> 916-018705-0</p>
                                            <p><strong>ธนาคาร:</strong> ธนาคารกรุงไทย สาขาย่านตาขาว</p>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-sky-700 pt-2">
                                        หลังจากโอนเงินเรียบร้อยแล้ว กรุณาแจ้งให้เราทราบ เพื่อที่เราจะได้เตรียมพร้อมสำหรับการให้บริการที่สุดแสนประทับใจสำหรับคุณ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Car className="h-8 w-8 text-sky-400" />
                                <span className="text-xl font-bold">รถตู้เช่าตรัง</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                บริการ <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="underline hover:text-sky-300">รถตู้เช่าตรังพร้อมคนขับมืออาชีพ</a> ให้บริการเช่ารถตู้ VIP, <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="underline hover:text-sky-300">รถตู้นำเที่ยวตรัง</a>และจังหวัดใกล้เคียง ไม่ว่าจะเป็นการเหมารถตู้เพื่อท่องเที่ยว, งานรับปริญญา, หรือ <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="underline hover:text-sky-300">รถรับส่งสนามบินตรัง</a>, สนามบินหาดใหญ่, และสนามบินกระบี่ เราพร้อมให้บริการคุณในทุกเส้นทาง
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">บริการของเรา</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>รถตู้ VIP 8 ที่นั่ง</li>
                                <li>รถตู้ VIP 9 ที่นั่ง</li>
                                <li>รถตู้หรู VIP alphard</li>
                                <li>บริการรับส่งสนามบิน</li>
                                <li>ทัวร์ท่องเที่ยวภาคใต้</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">ติดต่อเรา</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <a href="tel:0991932345" className="hover:text-amber-400 transition-colors">099-1932345</a>
                                    <a href="tel:0836418519" className="hover:text-amber-400 transition-colors">083-6418519</a>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <MessageCircle className="h-4 w-4" />
                                    <a href="mailto:suchada_2659@hotmail.com" className="hover:text-amber-400 transition-colors">suchada_2659@hotmail.com</a>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>17/18 ม.6 ต.บ้านควน อ.เมือง จ.ตรัง 92000</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} รถตู้เช่าตรัง สงวนลิขสิทธิ์.</p>
                    </div>
                </div>
            </footer>

            <SEOContent />

            {/* Floating Contact Buttons */}
            <div className="fixed bottom-6 right-6 space-y-3 z-40">
                <a href="https://line.me/ti/p/mNPO2-os_3"
                   className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-pulse-soft"
                >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                </a>
                <a href="https://www.facebook.com/messages/t/131791380352292"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 animate-pulse-soft"
                >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 0C5.374 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.733 8l3.13 3.259L19.794 8l-6.601 6.963z"/>
                    </svg>

                </a>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 cursor-pointer"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <Image
                            src={selectedImage}
                            alt="รีวิวลูกค้าขนาดใหญ่"
                            className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
                            width={1000}
                            height={1000}
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-2 -right-2 bg-white text-black p-2 rounded-full shadow-lg"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>
            )}

            {/* Conditionally render the CarSlider only when it's open */}
            {isSliderOpen && (
                <CarSlider
                    isOpen={isSliderOpen}
                    onClose={closeSlider}
                    category={selectedCategory}
                />
            )}
        </div>
    );
}
