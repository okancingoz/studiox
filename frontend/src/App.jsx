import { Box } from "@chakra-ui/react";
import { About, Contact, Instructors, Pricing, Testimonials } from "./pages";
import Home from "./pages/Home";

const App = () => {
  return (
    <Box minH={"100vh"}>
      <Home />
      <About />
      <Testimonials />
      <Instructors />
      <Pricing />
      <Contact />
    </Box>
  );
};

export default App;
