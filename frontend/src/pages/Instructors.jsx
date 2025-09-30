import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Button,
  useColorModeValue,
  Image,
  HStack,
  VStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLeaf } from "react-icons/fa";

// Import instructor images
import instructor1 from "../assets/images/instructors/instr-1-compressed.jpeg";
import instructor2 from "../assets/images/instructors/instr-2-compressed.jpeg";
import instructor3 from "../assets/images/instructors/instr-3-compressed.jpeg";
import instructor4 from "../assets/images/instructors/instr-4-compressed.jpeg";
import instructor5 from "../assets/images/instructors/instr-5-compressed.jpeg";

// Create motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

// Instructors data
const instructorsData = [
  {
    id: 1,
    name: "PILATES MASTERY",
    image: instructor1,
    email: "pilates@studiox.com",
    phone: "+1 (555) 123-4567",
    description: "Expert pilates instructors with over 10 years of experience. Our masters focus on proper form and personalized training to help you achieve your fitness goals safely and effectively.",
  },
  {
    id: 2,
    name: "YOGA EXPERTISE",
    image: instructor2,
    email: "yoga@studiox.com",
    phone: "+1 (555) 234-5678",
    description: "Certified yoga practitioners guiding you through mindful movements and breathing techniques. Experience the perfect balance of strength and flexibility with our expert yoga instructors.",
  },
  {
    id: 3,
    name: "FITNESS TRAINING",
    image: instructor3,
    email: "fitness@studiox.com",
    phone: "+1 (555) 345-6789",
    description: "Professional fitness trainers dedicated to helping you transform your physique. Our trainers combine modern exercise science with personalized attention for optimal results.",
  },
  {
    id: 4,
    name: "DANCE & MOVEMENT",
    image: instructor4,
    email: "dance@studiox.com",
    phone: "+1 (555) 456-7890",
    description: "Passionate dance instructors bringing rhythm and movement to your fitness journey. Join our classes to enjoy the perfect blend of cardio workout and artistic expression.",
  },
  {
    id: 5,
    name: "WELLNESS COACHING",
    image: instructor5,
    email: "wellness@studiox.com",
    phone: "+1 (555) 567-8901",
    description: "Holistic wellness coaches focusing on your mind-body connection. Our coaches provide guidance on nutrition, recovery, and mental well-being alongside your physical practice.",
  },
];

// Custom navigation button component
const NavButton = ({ direction, onClick }) => {
  const bgColor = useColorModeValue("rgba(255,255,255,0.7)", "rgba(0,0,0,0.7)");
  const textColor = useColorModeValue("green.600", "green.400");
  
  return (
    <Button
      onClick={onClick}
      bg={bgColor}
      _hover={{ bg: useColorModeValue("rgba(255,255,255,0.9)", "rgba(0,0,0,0.9)") }}
      color={textColor}
      borderRadius="md"
      px={4}
      py={6}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backdropFilter="blur(4px)"
      transition="all 0.3s ease"
    >
      {direction === "prev" ? (
        <>
          <ArrowBackIcon mr={2} />
          <Text>Prev</Text>
        </>
      ) : (
        <>
          <Text>Next</Text>
          <ArrowForwardIcon ml={2} />
        </>
      )}
    </Button>
  );
};

const Instructors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const autoplayRef = useRef(null);

  // Color theme integration with site - matching About section
  const bgColor = useColorModeValue("white", "#030903");
  const contentBgColor = useColorModeValue("green.50", "green.800"); // Light green background for content
  const headingColor = useColorModeValue("green.800", "green.100");
  const textColor = useColorModeValue("green.700", "green.200");
  const buttonBg = useColorModeValue("transparent", "transparent");
  const buttonColor = useColorModeValue("green.700", "green.400"); 
  const buttonHoverBg = useColorModeValue("green.100", "#030903");
  const buttonBorderColor = useColorModeValue("green.700", "green.400");

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === instructorsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? instructorsData.length - 1 : prev - 1));
  };

  // Animation variants
  const slideVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Autoplay functionality
  useEffect(() => {
    if (isInView) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 6000); // Change slide every 6 seconds
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isInView, currentSlide]);

  // Create decorative elements for the carousel
  const DecorativeElement = ({ size, top, left, right, bottom, delay, duration, rotate }) => {
    const elementColor = useColorModeValue("green.100", "green.700");
    
    return (
      <Box
        as={motion.div}
        position="absolute"
        zIndex={0}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 0.7, 
          scale: 1, 
          rotate: rotate || 0,
          transition: { 
            delay, 
            duration, 
            ease: "easeOut" 
          } 
        }}
      >
        <Icon as={FaLeaf} color={elementColor} boxSize={size} />
      </Box>
    );
  };

  return (
    <Box 
      id="instructors" 
      ref={sectionRef}
      height="100vh" 
      width="100%" 
      position="relative" 
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
    >
      <Container maxW="1140px" h="100%" position="relative" display="flex" alignItems="center" justifyContent="center">
        {/* Decorative elements */}
        <DecorativeElement size="4" top="15%" left="5%" delay={0.2} duration={1.2} rotate={-15} />
        <DecorativeElement size="6" top="10%" right="15%" delay={0.5} duration={1.5} rotate={20} />
        <DecorativeElement size="5" bottom="15%" left="10%" delay={0.8} duration={1.3} rotate={45} />
        <DecorativeElement size="4" bottom="20%" right="8%" delay={0.3} duration={1.4} rotate={-30} />
        <DecorativeElement size="3" top="40%" left="2%" delay={0.7} duration={1.1} rotate={15} />
        <DecorativeElement size="3" bottom="35%" right="4%" delay={0.4} duration={1.2} rotate={-10} />

        {/* Carousel Controls - Indicators on the right */}
        <VStack
          position="absolute"
          right={{ base: "20px", md: "40px" }}
          top="50%"
          transform="translateY(-50%)"
          spacing={3}
          zIndex="3"
          pr={{ base: 2, md: 0 }}
        >
          {instructorsData.map((_, index) => (
            <Box
              key={index}
              as="button"
              w="10px"
              h="10px"
              borderRadius="full"
              border="1px solid"
              borderColor={buttonColor}
              bg={index === currentSlide ? buttonColor : "transparent"}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              transition="all 0.25s"
              _hover={{ transform: "scale(1.3)" }}
            />
          ))}
        </VStack>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <MotionFlex
            key={currentSlide}
            variants={slideVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
            direction={{ base: "column", md: "row" }}
            h={{ base: "auto", md: "80%" }}
            maxH={{ md: "600px" }}
            w="100%"
            align="center"
            boxShadow="xl"
            mx={{ md: 2 }}
            borderRadius="8px"
            overflow="hidden"
            position="relative"
          >
            {/* Left Column (Image) */}
            <Box 
              w={{ base: "100%", md: "42%" }} 
              h={{ base: "350px", md: "100%" }}
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              bg={useColorModeValue("green.50", "#030903")}
              bgGradient={useColorModeValue(
                "linear(to-r, white, green.50)",
                "linear(to-r, #030903, #030903)"
              )}
            >
              {/* Subtle patterns around the image */}
              <Box
                position="absolute"
                top="15px"
                left="15px"
                width="70px"
                height="70px"
                opacity="0.3"
                borderTop="2px solid"
                borderLeft="2px solid"
                borderColor={buttonColor}
              />
              
              <Box
                position="absolute"
                bottom="15px"
                right="15px"
                width="70px"
                height="70px"
                opacity="0.3"
                borderBottom="2px solid"
                borderRight="2px solid"
                borderColor={buttonColor}
              />

              <Box
                w={{ base: "330px", md: "450px" }}
                h={{ base: "330px", md: "450px" }}
                borderRadius="6px"
                overflow="hidden"
                boxShadow="lg"
                mr={{ md: "-2px" }} /* Create attached feeling with content */
                zIndex="1"
              >
                <MotionImage
                  src={instructorsData[currentSlide].image}
                  alt={instructorsData[currentSlide].name}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
              </Box>
            </Box>

            {/* Right Column (Content) */}
            <Box
              w={{ base: "100%", md: "58%" }}
              h={{ base: "auto", md: "100%" }}
              p={{ base: 8, md: "12" }}
              pl={{ md: "14" }}
              pr={{ md: "10" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              bg={contentBgColor}
              borderRadius={{ md: "0 6px 6px 0" }}
              zIndex="0"
              position="relative"
              overflow="hidden"
            >
              {/* Decorative patterns within content area */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                w="120px"
                h="120px"
                borderRadius="full"
                bg={useColorModeValue("green.100", "green.700")}
                opacity="0.15"
              />
              
              <Box
                position="absolute"
                bottom="-40px"
                left="20%"
                w="180px"
                h="180px"
                borderRadius="full"
                bg={useColorModeValue("green.100", "green.700")}
                opacity="0.1"
              />
              
              <Box
                position="absolute"
                top="30%"
                right="-50px"
                w="100px"
                h="100px"
                borderRadius="full"
                bg={useColorModeValue("green.100", "green.700")}
                opacity="0.1"
              />
              <MotionBox
                variants={contentVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                maxWidth="100%"
                position="relative"
                zIndex="1"
              >
                <MotionHeading 
                  as="h2"
                  size={{ base: "lg", md: "xl" }}
                  color={headingColor}
                  mb={6}
                  fontWeight="bold"
                  letterSpacing="1px"
                  textTransform="uppercase"
                  position="relative"
                  display="inline-block"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: "0",
                    width: "50px",
                    height: "2px",
                    backgroundColor: headingColor,
                  }}
                >
                  {instructorsData[currentSlide].name}
                </MotionHeading>

                <MotionText
                  color={textColor}
                  fontSize={{ base: "sm", md: "md" }}
                  mb={4}
                  lineHeight="1.8"
                  fontStyle="normal"
                  letterSpacing="0.3px"
                  fontWeight="medium"
                  maxW={{ base: "100%", md: "90%" }}
                >
                  {instructorsData[currentSlide].description}
                </MotionText>

                {/* Contact Information */}
                <VStack align="flex-start" spacing={2} mb={6} maxW={{ base: "100%", md: "90%" }}>
                  <HStack spacing={2} color={textColor}>
                    <EmailIcon color={buttonColor} />
                    <MotionText fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                      {instructorsData[currentSlide].email}
                    </MotionText>
                  </HStack>
                  <HStack spacing={2} color={textColor}>
                    <PhoneIcon color={buttonColor} />
                    <MotionText fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                      {instructorsData[currentSlide].phone}
                    </MotionText>
                  </HStack>
                </VStack>

                <MotionButton
                  as={Link}
                  variant="outline"
                  color={buttonColor}
                  borderColor={buttonBorderColor}
                  borderWidth="1px"
                  bg={buttonBg}
                  _hover={{
                    bg: buttonHoverBg,
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                  px={7}
                  py={5}
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  href="#pricing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  position="relative"
                  zIndex="2"
                >
                  Work With Me
                </MotionButton>
              </MotionBox>
            </Box>
          </MotionFlex>
        </AnimatePresence>

        {/* Navigation Controls - Custom Prev/Next Buttons */}
        <Flex
          position="absolute"
          bottom="1.5rem"
          left="50%"
          transform="translateX(-50%)"
          zIndex="5"
          gap={4}
        >
          <NavButton direction="prev" onClick={prevSlide} />
          <NavButton direction="next" onClick={nextSlide} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Instructors;
