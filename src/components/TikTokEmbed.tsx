"use client";
import React, { useEffect, useState } from "react";

const TikTokEmbed: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client side, after the component has mounted.
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // This effect runs only after isMounted is true, ensuring it's client-side.
    if (isMounted) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.tiktok.com/embed.js";
      document.body.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isMounted]);

  // Render a placeholder on the server and initial client render.
  // Render the actual embed only after the component has mounted on the client.
  if (!isMounted) {
    return <div className="w-full h-[780px] bg-gray-200 animate-pulse rounded-lg" />;
  }

  return (
      <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@vantrangforreng/video/7339536111032651015"
          data-video-id="7339536111032651015"
          style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" title="@vantrangforreng" href="https://www.tiktok.com/@vantrangforreng?refer=embed">@vantrangforreng</a>
        </section>
      </blockquote>
  );
};

export default TikTokEmbed;