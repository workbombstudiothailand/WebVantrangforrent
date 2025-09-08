'use client';

import React from 'react';

const FacebookPageIframe: React.FC = () => {
    const pageUrl = "https://www.facebook.com/andamanTrangThrawel";
    // By removing the fixed width and height and relying on adapt_container_width=true,
    // the iframe will be responsive and fill its parent container.
    const iframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

    return (
        <iframe
            src={iframeSrc}
            className="w-full h-full border-none overflow-hidden"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Page"
            loading="lazy"
        ></iframe>
    );
};

export default FacebookPageIframe;
