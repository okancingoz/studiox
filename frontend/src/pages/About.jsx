import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import about1Image from "../assets/images/about/about1.jpg";
import about2Image from "../assets/images/about/about2.jpg";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);
const MotionText = motion.create(Text);
const MotionHeading = motion.create(Heading);
const MotionImage = motion.create(Image);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); // Changed once to false

  // Lazy loading states
  const [image1Loaded, setImage1Loaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);

  // Color mode values
  const bgColor = useColorModeValue("white", "green.900");
  const headingColor = useColorModeValue("green.800", "green.100");
  const textColor = useColorModeValue("green.700", "green.200");
  const accentColor = useColorModeValue("green.500", "green.400");

  // Pre-compute conditional hook values
  const imageBorderColor = useColorModeValue("white", "green.900");
  const placeholder1Bg = useColorModeValue("green.100", "green.700");
  const placeholder2Bg = useColorModeValue("green.200", "green.600");

  // Animation variants
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

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // Lazy loading effect
  useEffect(() => {
    if (isInView) {
      // Start loading images when component is in view
      const img1 = new window.Image();
      const img2 = new window.Image();

      img1.onload = () => setImage1Loaded(true);
      img2.onload = () => setImage2Loaded(true);

      img1.src = about1Image;
      img2.src = about2Image;
    }
  }, [isInView]);

  return (
    <Box
      id="about"
      bg={bgColor}
      h="100vh" // Full viewport height
      pt={{ base: "80px", md: "90px" }} // Account for fixed navbar
      position="relative"
      display="flex"
      alignItems="center"
    >
      <Container maxW="1140px" px={{ base: 4, md: 8 }} h="full">
        <MotionBox
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          h="full"
          display="flex"
          alignItems="center"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            templateRows={{ base: "auto auto", lg: "1fr" }}
            gap={{ base: 6, lg: 10 }}
            alignItems="center"
            w="full"
            h={{ base: "auto", lg: "full" }}
            py={{ base: 6, lg: 0 }}
          >
            {/* Left Side - Text Content */}
            <GridItem order={{ base: 1, lg: 1 }}>
              <MotionVStack
                align="flex-start"
                spacing={{ base: 3, md: 4, lg: 5 }}
                variants={textVariants}
                justify="center"
                h={{ base: "auto", lg: "full" }}
                maxH={{ base: "none", lg: "75vh" }}
                overflow="hidden"
                pr={{ lg: 4 }}
              >
                {/* Main Heading */}
                <MotionHeading
                  as="h2"
                  size={{ base: "xl", md: "2xl", lg: "3xl" }}
                  color={headingColor}
                  fontWeight="bold"
                  lineHeight="1.2"
                  letterSpacing="tight"
                  variants={textVariants}
                >
                  Transform Your{" "}
                  <Box as="span" color={accentColor}>
                    Mind & Body
                  </Box>
                  <br />
                  Through Pilates
                </MotionHeading>

                {/* Subheading */}
                <MotionHeading
                  as="h3"
                  size={{ base: "md", md: "lg" }}
                  color={textColor}
                  fontWeight="medium"
                  variants={textVariants}
                >
                  Discover the Art of Movement
                </MotionHeading>

                {/* Content Paragraphs - Shortened for better fit */}
                <MotionText
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color={textColor}
                  lineHeight="1.6"
                  variants={textVariants}
                >
                  At StudioX, Pilates is more than exercise—it's a journey of
                  mindful movement, blending physical wellness with mental
                  clarity.
                </MotionText>

                <MotionText
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color={textColor}
                  lineHeight="1.6"
                  variants={textVariants}
                >
                  Our sanctuary blends traditional techniques with modern
                  innovation, designed to challenge your body while calming your
                  mind.
                </MotionText>

                {/* Highlight Quote - Compact version */}
                <MotionBox
                  borderLeft="4px solid"
                  borderColor={accentColor}
                  pl={4}
                  py={2}
                  bg={useColorModeValue("green.50", "green.800")}
                  borderRadius="md"
                  variants={textVariants}
                  w="full"
                >
                  <Text
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontStyle="italic"
                    color={headingColor}
                    fontWeight="medium"
                  >
                    "Change happens through movement, and movement heals."
                  </Text>
                  <Text
                    fontSize="xs"
                    color={textColor}
                    mt={1}
                    fontWeight="medium"
                  >
                    — Joseph Pilates
                  </Text>
                </MotionBox>
              </MotionVStack>
            </GridItem>

            {/* Right Side - Image Collage */}
            <GridItem order={{ base: 2, lg: 2 }}>
              <MotionBox
                position="relative"
                h={{ base: "350px", md: "450px", lg: "70vh" }}
                w="full"
                variants={imageVariants}
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
              >
                {/* Background Accent Shapes - Adjusted for larger images */}
                <Box
                  position="absolute"
                  top="12%"
                  right="12%"
                  width={{ base: "45px", md: "60px", lg: "80px" }}
                  height={{ base: "45px", md: "60px", lg: "80px" }}
                  bg={useColorModeValue("green.100", "green.700")}
                  borderRadius="50% 40% 60% 30%"
                  opacity={0.3}
                  zIndex={1}
                />
                <Box
                  position="absolute"
                  bottom="15%"
                  left="8%"
                  width={{ base: "30px", md: "45px", lg: "60px" }}
                  height={{ base: "30px", md: "45px", lg: "60px" }}
                  bg={useColorModeValue("green.200", "green.600")}
                  borderRadius="30% 60% 40% 50%"
                  opacity={0.4}
                  zIndex={1}
                />

                {/* First Image - Larger and better centered */}
                {image1Loaded && (
                  <MotionImage
                    src={about1Image}
                    alt="Pilates practice at StudioX"
                    position="absolute"
                    top="5%"
                    right="5%"
                    width={{ base: "70%", md: "75%", lg: "80%" }}
                    height={{ base: "65%", md: "70%", lg: "75%" }}
                    objectFit="cover"
                    objectPosition="center"
                    borderRadius="60% 40% 70% 30%"
                    boxShadow="xl"
                    zIndex={2}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, rotate: 0 }
                        : { opacity: 0, scale: 0.8, rotate: 5 }
                    }
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                )}

                {/* Second Image - Larger and better centered */}
                {image2Loaded && (
                  <MotionImage
                    src={about2Image}
                    alt="Pilates equipment and environment"
                    position="absolute"
                    bottom="5%"
                    left="5%"
                    width={{ base: "60%", md: "65%", lg: "70%" }}
                    height={{ base: "55%", md: "60%", lg: "65%" }}
                    objectFit="cover"
                    objectPosition="center"
                    borderRadius="40% 60% 30% 70%"
                    boxShadow="lg"
                    zIndex={3}
                    border="3px solid"
                    borderColor={imageBorderColor}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, rotate: 0 }
                        : { opacity: 0, scale: 0.8, rotate: -5 }
                    }
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                )}

                {/* Updated loading placeholders */}
                {!image1Loaded && (
                  <Box
                    position="absolute"
                    top="5%"
                    right="5%"
                    width={{ base: "70%", md: "75%", lg: "80%" }}
                    height={{ base: "65%", md: "70%", lg: "75%" }}
                    bg={placeholder1Bg}
                    borderRadius="60% 40% 70% 30%"
                    zIndex={2}
                    opacity={0.3}
                  />
                )}

                {!image2Loaded && (
                  <Box
                    position="absolute"
                    bottom="5%"
                    left="5%"
                    width={{ base: "60%", md: "65%", lg: "70%" }}
                    height={{ base: "55%", md: "60%", lg: "65%" }}
                    bg={placeholder2Bg}
                    borderRadius="40% 60% 30% 70%"
                    zIndex={3}
                    opacity={0.3}
                  />
                )}
              </MotionBox>
            </GridItem>
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default About;
