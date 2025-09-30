import React, { useEffect } from 'react';

const SEO = ({ 
  title = "StudioX - Premium Fitness & Wellness Center", 
  description = "StudioX - Your premier fitness destination offering expert-led yoga, pilates, and fitness training. Join our community for personalized classes, nutrition guidance, and wellness coaching.", 
  keywords = "fitness studio, yoga, pilates, personal training, wellness, StudioX", 
  canonical = "https://studiox.com",
  image = "/vite.svg"
}) => {
  useEffect(() => {
    // Update the document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    
    // Update link tags
    updateLinkTag("canonical", canonical);
    
    // Update Open Graph tags
    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:url", canonical, "property");
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", image, "property");
    
    // Update Twitter tags
    updateMetaTag("twitter:card", "summary_large_image", "property");
    updateMetaTag("twitter:url", canonical, "property");
    updateMetaTag("twitter:title", title, "property");
    updateMetaTag("twitter:description", description, "property");
    updateMetaTag("twitter:image", image, "property");
  }, [title, description, keywords, canonical, image]);
  
  // Helper function to update meta tags
  const updateMetaTag = (name, content, attributeName = "name") => {
    let element = document.querySelector(`meta[${attributeName}="${name}"]`);
    
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attributeName, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute("content", content);
  };
  
  // Helper function to update link tags
  const updateLinkTag = (rel, href) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    
    if (!element) {
      element = document.createElement("link");
      element.setAttribute("rel", rel);
      document.head.appendChild(element);
    }
    
    element.setAttribute("href", href);
  };
  
  // This component doesn't render anything visible
  return null;
};

export default SEO;