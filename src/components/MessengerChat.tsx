'use client';

import React, { useEffect } from 'react';

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
  useEffect(() => {
    window.fbAsyncInit = function() {
      if (window.FB) {
        window.FB.init({
          xfbml: true,
          version: 'v19.0'
        });
        window.FB.XFBML.parse();
      }
    };

    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }
  }, []);

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
    </>
  );
};

export default MessengerChat;
