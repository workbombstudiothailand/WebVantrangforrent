import React from 'react';

const FacebookPageIframe: React.FC = () => {
    const pageUrl = "https://www.facebook.com/andamanTrangThrawel";
    // Set a fixed width (e.g., 500px) in the src, which is narrower than the container, to allow for centering.
    const iframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&width=500&height=750&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

    return (
        <iframe
            src={iframeSrc}
            width="500" // Set a fixed width for the iframe element
            height="750" // Match the container height
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Page Plugin"
            loading="lazy"
        ></iframe>
    );
};

export default FacebookPageIframe;