'use client';

import React from 'react';
import Script from 'next/script';

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
      />
    </>
  );
};

export default MessengerChat;
