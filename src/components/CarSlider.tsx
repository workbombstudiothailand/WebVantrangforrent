'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import { carSlides } from '@/app/data'; // Import slide data
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface CarSliderProps {
    isOpen: boolean;
    onClose: () => void;
    category: string;
}

const CarSlider: React.FC<CarSliderProps> = ({ isOpen, onClose, category }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const filteredSlides = carSlides.filter(slide => slide.category === category);

    useEffect(() => {
        if (!isAutoPlaying || !isOpen) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % filteredSlides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, isOpen, filteredSlides.length]);

    useEffect(() => {
        if (isOpen) {
            setCurrentSlide(0);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || filteredSlides.length === 0) return null;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % filteredSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const handleLineBooking = () => {
        const carTypeName = category === 'Hiace' ? 'รถตู้ Hiace' : category === 'Commuter' ? 'รถตู้ Commuter' : 'รถตู้ VIP';
        const message = `สวัสดีครับ! สนใจจอง${carTypeName}`;
        const lineUrl = `http://line.me/ti/p/mNPO2-os_3?text=${encodeURIComponent(message)}`;
        window.open(lineUrl, '_blank');
    };

    const LineIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
        </svg>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-3xl bg-black rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="ปิดสไลด์โชว์"
                >
                    <X className="w-6 h-6" />
                </button>

                <div
                    className="relative h-[80vh] overflow-hidden"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Main Slider */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {filteredSlides.map((slide) => (
                            <div key={slide.id} className="min-w-full h-full relative flex items-center justify-center">
                                <Image
                                    src={slide.image}
                                    alt={`รูปภาพรถตู้ ${category} #${slide.id}`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    sizes="(max-width: 768px) 100vw, 896px"
                                    className="transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                        aria-label="รูปภาพก่อนหน้า"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                        aria-label="รูปภาพถัดไป"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Bottom Section with Dots */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="flex justify-center items-center gap-4">
                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2">
                                {filteredSlides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                            index === currentSlide
                                                ? 'bg-white scale-125'
                                                : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                        aria-label={`ไปที่รูปภาพที่ ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Booking Button */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
                    <button
                        onClick={handleLineBooking}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <LineIcon />
                        จองผ่าน LINE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarSlider;