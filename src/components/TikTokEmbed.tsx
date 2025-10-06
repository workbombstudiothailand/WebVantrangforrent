"use client";
import React, { useEffect, useRef } from "react";

const TikTokEmbed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Clear previous content (for hot reload)
    containerRef.current.innerHTML = "";
    // Create blockquote for a specific TikTok video
    const blockquote = document.createElement("blockquote");
    blockquote.className = "tiktok-embed";
    blockquote.setAttribute("cite", "https://www.tiktok.com/@vantrangforreng/video/7339536111032651015");
    blockquote.setAttribute("data-video-id", "7339536111032651015");
    blockquote.setAttribute("data-embed-from", "oembed");
    blockquote.style.maxWidth = "605px";
    blockquote.style.minWidth = "325px";
    blockquote.innerHTML = `
      <section>
        <a target="_blank" title="@vantrangforreng" href="https://www.tiktok.com/@vantrangforreng?refer=embed">@vantrangforreng</a>
        <p>แวนตรังฟอร์เรนท์ - คลิปแนะนำ</p>
        <a target="_blank" title="TikTok Video" href="https://www.tiktok.com/@vantrangforreng/video/7339536111032651015?refer=embed">ชมคลิปนี้บน TikTok</a>
      </section>
    `;
    containerRef.current.appendChild(blockquote);
    // Inject TikTok script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.tiktok.com/embed.js";
    script.onerror = () => {
      const fallback = document.createElement("script");
      fallback.src = "https://iframely.net/files/tiktok-embed.js";
      document.body.appendChild(fallback);
    };
    containerRef.current.appendChild(script);
  }, []);

  return <div className="w-full flex justify-center" ref={containerRef} />;
};

export default TikTokEmbed;