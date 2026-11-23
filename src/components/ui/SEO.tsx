import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/assets/brand/Isolated VK Perfume Logo.png'
}) => {
  useEffect(() => {
    // Set page title
    document.title = `${title} | VK Perfume`;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Set Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | VK Perfume`);
    }

    // Set Open Graph description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Set Open Graph Image
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', ogImage);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, description, canonical, ogImage]);

  return null;
};
