'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

const MessengerChat: React.FC = () => {
  useEffect(() => {
    // Define the async init function
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v19.0'
      });
      // Manually parse the chat plugin after initialization
      window.FB.XFBML.parse();
    };

    // Load the SDK script if it doesn't exist
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
        // If the script is already loaded, manually parse
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }

    // We don't include a cleanup function to remove the script,
    // as it can cause issues with navigation in a Next.js app.
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div 
        className="fb-customerchat"
        data-attribution="biz_inbox"
        data-page-id="131791380352292" // Updated Page ID
        data-theme-color="#0284c7"
        data-logged-in-greeting="สวัสดีครับ! สนใจเช่ารถตู้หรือมีคำถามอะไรสอบถามไหมครับ? 🚐"
        data-logged-out-greeting="สวัสดีครับ! สนใจเช่ารถตู้หรือมีคำถามอะไรสอบถามไหมครับ? 🚐"
        data-greeting-dialog-display="show"
        data-greeting-dialog-delay="3"
      />
    </>
  );
};

export default MessengerChat;