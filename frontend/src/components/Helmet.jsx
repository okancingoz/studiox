import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO component that handles all the metadata for improving search engine optimization
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Comma separated keywords for SEO
 * @param {string} props.canonical - Canonical URL for the page
 * @param {string} props.image - Image URL for social sharing
 * @param {string} props.type - Content type (defaults to website)
 */
const SEOHelmet = ({
  title = "StudioX - Premium Fitness & Wellness Center",
  description = "StudioX - Your premier fitness destination offering expert-led yoga, pilates, and fitness training. Join our community for personalized classes, nutrition guidance, and wellness coaching.",
  keywords = "fitness studio, yoga, pilates, personal training, wellness, StudioX",
  canonical = "https://studiox.com",
  image = "/vite.svg",
  type = "website",
}) => {
  // Ensure image URL is absolute
  const imageUrl = image.startsWith('http') ? image : `${canonical}${image}`;
  
  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags for social sharing */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="StudioX" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Additional SEO-friendly meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="StudioX" />
    </Helmet>
  );
};

export default SEOHelmet;