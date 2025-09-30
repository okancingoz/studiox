import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "../assets/images/hero.jpg";
import Navbar from "../components/Navbar";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);
const MotionHeading = motion.create(Heading);
const MotionButton = motion.create(Button);

const Home = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: false, margin: "-100px" });

  // Color mode values for Hero Section
  const overlayBg = useColorModeValue(
    "rgba(230, 249, 237, 0.85)", // green.50 with opacity
    "rgba(3, 9, 3, 0.85)" // #030903 with opacity
  );

  const headingColor = useColorModeValue("green.800", "green.100");
  const buttonColorScheme = "green";

  // Animation variants for Hero Section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box>
      {/* Container for Navbar and Hero Section */}
      <Box id="home" h="100vh" display="flex" flexDirection="column">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section - Integrated directly */}
        <MotionBox
          ref={heroRef}
          position="relative"
          flex="1"
          w="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Background Image with Blur and Overlay */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            backgroundImage={`url(${heroImage})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            filter="blur(2px)"
            transform="scale(1.1)" // Slight scale to avoid blur edge effects
            zIndex="-2"
          />

          {/* Color Overlay */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg={overlayBg}
            backdropFilter="blur(1px)"
            zIndex="-1"
          />

          {/* Content Container */}
          <Container maxW="1140px" px={{ base: 6, md: 8 }}>
            <MotionVStack
              spacing={{ base: 8, md: 10, lg: 12 }}
              textAlign="center"
              variants={containerVariants}
            >
              {/* Main Heading */}
              <MotionHeading
                as="h1"
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                color={headingColor}
                lineHeight={{ base: "1.2", md: "1.1" }}
                maxW={{ base: "full", md: "4xl" }}
                variants={itemVariants}
                letterSpacing="tight"
                textShadow="0 2px 4px rgba(0,0,0,0.1)"
              >
                Transform Your Body,{" "}
                <Box as="span" color="green.500">
                  Elevate Your Mind
                </Box>
                <br />
                Through the Art of Pilates
              </MotionHeading>

              {/* Subtitle */}
              <MotionBox
                variants={itemVariants}
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color={useColorModeValue("green.700", "green.200")}
                fontWeight="medium"
                maxW={{ base: "full", md: "2xl" }}
                textShadow="0 1px 2px rgba(0,0,0,0.1)"
              >
                Discover strength, flexibility, and balance at StudioX
              </MotionBox>

              {/* CTA Button */}
              <MotionButton
                onClick={() => scrollToSection("pricing")}
                size={{ base: "lg", md: "xl" }}
                colorScheme={buttonColorScheme}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                px={{ base: 8, md: 12 }}
                py={{ base: 6, md: 8 }}
                borderRadius="full"
                boxShadow="lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
                transition="all 0.2s ease"
                cursor="pointer"
              >
                Join Us
              </MotionButton>
            </MotionVStack>
          </Container>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Home;
