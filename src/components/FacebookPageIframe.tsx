'use client';

import React from 'react';

const FacebookPageIframe: React.FC = () => {
    const pageUrl = "https://www.facebook.com/andamanTrangThrawel";
    const iframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&width=750&height=750&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

    return (
        <iframe
            src={iframeSrc}
            className="w-full h-full flex items-center  "
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Page Plugin"
        ></iframe>
    );
};

export default FacebookPageIframe;
