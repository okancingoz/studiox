// Performance utilities for monitoring and optimization

/**
 * Prefetch critical routes/components
 */
export const prefetchRoutes = () => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      // Prefetch critical routes
      import("../pages/About").catch(() => {});
      import("../pages/Pricing").catch(() => {});
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      import("../pages/About").catch(() => {});
      import("../pages/Pricing").catch(() => {});
    }, 1);
  }
};

/**
 * Optimize images with lazy loading observer
 */
export const setupLazyLoadingObserver = () => {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Remove loading spinner once app is ready
 */
export const removeLoadingSpinner = () => {
  const loader = document.querySelector(".app-loading");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.3s ease";
    setTimeout(() => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 300);
  }
};

/**
 * Preload critical fonts
 */
export const preloadFonts = () => {
  const fonts = [
    "/fonts/static/Montserrat-Regular.ttf",
    "/fonts/static/Montserrat-Bold.ttf",
    "/fonts/static/Montserrat-SemiBold.ttf",
  ];

  fonts.forEach((font) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "font";
    link.type = "font/ttf";
    link.crossOrigin = "anonymous";
    link.href = font;
    document.head.appendChild(link);
  });
};
