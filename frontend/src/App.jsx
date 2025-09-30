import { Box } from "@chakra-ui/react";
import { About, Contact, Instructors, Pricing, Footer } from "./pages";
import Home from "./pages/Home";

const App = () => {
  return (
    <Box minH={"100vh"}>
      <Home />
      <About />
      <Instructors />
      <Pricing />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
