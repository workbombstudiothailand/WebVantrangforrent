'use client';

import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string;
    width?: number;
    height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
                                                 src,
                                                 alt,
                                                 className = '',
                                                 placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
                                                 width,
                                                 height
                                             }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <img
                ref={imgRef}
                src={isInView ? src : placeholder}
                alt={alt}
                className={`transition-opacity duration-500 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
                onLoad={handleLoad}
                loading="lazy"
                decoding="async"
                width={width}
                height={height}
            />
            {!isLoaded && isInView && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400 text-sm">กำลังโหลด...</div>
                </div>
            )}
        </div>
    );
};

export default LazyImage;