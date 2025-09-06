'use client';

import React from 'react';
import Script from 'next/script';

// Define the type for the Facebook SDK object
declare global {
    interface Window {
        FB?: {
            init: (options: {
                xfbml: boolean;
                version: string;
            }) => void;
            XFBML: {
                parse: () => void;
            };
        };
        fbAsyncInit?: () => void;
    }
}

const MessengerChat: React.FC = () => {
  return (
    <>
      <div id="fb-root"></div>
      <div 
        className="fb-customerchat"
        data-attribution="biz_inbox"
        data-page-id="131791380352292"
        data-theme-color="#0284c7"
        data-logged-in-greeting="สวัสดีครับ! สนใจเช่ารถตู้หรือมีคำถามอะไรไหมครับ? 🚐"
        data-logged-out-greeting="สวัสดีครับ! สนใจเช่ารถตู้หรือมีคำถามอะไรไหมครับ? 🚐"
        data-greeting-dialog-display="show"
        data-greeting-dialog-delay="3"
      />
      <Script 
        id="facebook-jssdk" 
        src="https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.fbAsyncInit = function() {
            if (window.FB) {
              window.FB.init({
                xfbml: true,
                version: 'v19.0'
              });
            }
          };
          // Ensure FB.XFBML.parse() is called after the SDK has loaded and initialized
          if (window.FB) {
            window.FB.XFBML.parse();
          } else {
            // Fallback if fbAsyncInit has already run
            const checkFBLoaded = setInterval(() => {
              if (window.FB) {
                window.FB.XFBML.parse();
                clearInterval(checkFBLoaded);
              }
            }, 100);
          }
        }}
      />
    </>
  );
};

export default MessengerChat;
