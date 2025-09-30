import { Box } from "@chakra-ui/react";
import { About, Contact, Instructors, Pricing, Footer } from "./pages";
import { HomePageSEO, AboutPageSEO, InstructorsPageSEO, PricingPageSEO, ContactPageSEO } from "./pages/SEO";
import Home from "./pages/Home";

const App = () => {
  return (
    <Box minH={"100vh"}>
      <HomePageSEO />
      <Home />
      <AboutPageSEO />
      <About />
      <InstructorsPageSEO />
      <Instructors />
      <PricingPageSEO />
      <Pricing />
      <ContactPageSEO />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
