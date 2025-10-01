import { Box } from "@chakra-ui/react";
import { lazy, Suspense, useEffect } from "react";
import Home from "./pages/Home";
import { HomePageSEO } from "./pages/SEO";
import { prefetchRoutes, removeLoadingSpinner } from "./utils/performance";

// Lazy load components for better performance
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Instructors = lazy(() => import("./pages/Instructors"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Footer = lazy(() => import("./pages/Footer"));
const AboutPageSEO = lazy(() => import("./pages/SEO/AboutPageSEO"));
const InstructorsPageSEO = lazy(() => import("./pages/SEO/InstructorsPageSEO"));
const PricingPageSEO = lazy(() => import("./pages/SEO/PricingPageSEO"));
const ContactPageSEO = lazy(() => import("./pages/SEO/ContactPageSEO"));

const App = () => {
  useEffect(() => {
    // Remove loading spinner once app is mounted
    removeLoadingSpinner();

    // Prefetch critical routes after initial render
    prefetchRoutes();
  }, []);

  return (
    <Box minH={"100vh"}>
      <HomePageSEO />
      <Home />
      <Suspense fallback={<Box minH="100vh" />}>
        <AboutPageSEO />
        <About />
        <InstructorsPageSEO />
        <Instructors />
        <PricingPageSEO />
        <Pricing />
        <ContactPageSEO />
        <Contact />
        <Footer />
      </Suspense>
    </Box>
  );
};

export default App;
