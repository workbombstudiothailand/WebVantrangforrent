"use client";

import React, { useEffect, useState, useRef } from 'react';

const FacebookPageIframe: React.FC = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const iframeRef = useRef<HTMLDivElement>(null);

    const pageUrl = "https://www.facebook.com/andamanTrangThrawel";
    const iframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&width=500&height=750&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

    useEffect(() => {
        const target = iframeRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (target) {
                        observer.unobserve(target);
                    }
                }
            },
            { rootMargin: '200px' } // Load 200px before it enters the viewport
        );

        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    return (
        <div ref={iframeRef} className="w-full h-full flex items-center justify-center relative bg-gray-200 rounded-lg">
            {isIntersecting && (
                <iframe src={iframeSrc} width="500" height="750" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Facebook Page Plugin" loading="lazy" onLoad={() => setIsLoaded(true)} className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></iframe>
            )}
        </div>
    );
};

export default FacebookPageIframe;