'use client';

import React from 'react';

const FacebookPageIframe: React.FC = () => {
    const pageUrl = "https://www.facebook.com/andamanTrangThrawel";
    const iframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

    return (
        <div className="w-full flex justify-center">
            <iframe
                src={iframeSrc}
                width="510"
                height="660"
                style={{ border: 'none', overflow: 'hidden' }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page Plugin"
            ></iframe>
        </div>
    );
};

export default FacebookPageIframe;
