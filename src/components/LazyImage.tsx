'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface LazyImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    sizes?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height, className, sizes }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative w-full h-full">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                    <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 18" />
                    </svg>
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'} ${className}`}
                onLoad={() => setLoading(false)}
                sizes={sizes}
            />
        </div>
    );
};

export default LazyImage;