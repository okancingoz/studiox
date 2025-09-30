import {
  Box,
  Heading,
  Text,
  Container,
  Flex,
  Button,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaCheck, FaStar } from 'react-icons/fa';

// Create motion components
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionContainer = motion.create(Container);

const Pricing = () => {
  // Refs for intersection observer
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Colors based on theme - structured for text hierarchy
  const bgColor = useColorModeValue('white', '#030903');
  const cardBorderColor = useColorModeValue('gray.200', 'gray.700');
  
  // Text Hierarchy Colors
  const primaryHeadingColor = useColorModeValue('green.800', 'green.100');    // Main headings (h2)
  const secondaryHeadingColor = useColorModeValue('green.700', 'green.200');  // Subheadings (h3, h4)
  const bodyTextColor = useColorModeValue('green.700', 'green.300');          // Body text
  const subtleTextColor = useColorModeValue('green.600', 'green.400');        // Subtle text, captions
  const accentColor = useColorModeValue('green.500', 'green.400');            // Accent/brand color
  
  // For backward compatibility
  const headingColor = primaryHeadingColor;
  const textColor = bodyTextColor;
  const highlightedCardBg = useColorModeValue('green.50', '#030903');
  const buttonBg = useColorModeValue('green.500', 'green.400');
  const buttonHoverBg = useColorModeValue('green.600', 'green.500');
  const buttonHoverBgAlt = useColorModeValue('green.50', '#030903');
  const checkIconColor = useColorModeValue('green.500', 'green.400');

  // Animation when component comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
        duration: 0.7
      }
    }
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  // Pricing data
  const pricingPlans = [
    {
      title: "Basic",
      description: "Perfect for individual training and basic sessions",
      price: "$49",
      period: "per month",
      features: [
        "2 sessions per week",
        "Access to basic equipment",
        "Online booking system",
        "Personal locker",
        "Group classes"
      ],
      isRecommended: false,
      cta: "Join Now"
    },
    {
      title: "Pro",
      description: "Our most popular plan for dedicated practitioners",
      price: "$89",
      period: "per month",
      features: [
        "Unlimited sessions",
        "Full equipment access",
        "Priority booking",
        "1 private session / month",
        "Nutritional consultation"
      ],
      isRecommended: true,
      cta: "Get Started"
    },
    {
      title: "Premium",
      description: "Elite training with personalized attention",
      price: "$149",
      period: "per month",
      features: [
        "Unlimited access 24/7",
        "Premium equipment",
        "4 private sessions / month",
        "Custom training program",
        "Wellness coaching"
      ],
      isRecommended: false,
      cta: "Elevate Your Training"
    }
  ];

  // Pulse animation for recommended card
  const pulseVariants = {
    initial: {
      boxShadow: "0 0 0 0 rgba(72, 187, 120, 0)"
    },
    pulse: {
      boxShadow: [
        "0 0 0 0 rgba(72, 187, 120, 0.6)",
        "0 0 0 8px rgba(72, 187, 120, 0.3)",
        "0 0 0 16px rgba(72, 187, 120, 0)",
      ],
      scale: [1, 1.02, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box 
      id="pricing" 
      minH="100vh" 
      display="flex" 
      alignItems="center" 
      py={16}
      bg={useColorModeValue('gray.50', '#030903')}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="15%"
        left="-5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg={useColorModeValue("green.50", "#030903")}
        opacity="0.4"
        zIndex="0"
      />
      
      <Box
        position="absolute"
        bottom="-10%"
        right="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg={useColorModeValue("green.50", "#030903")}
        opacity="0.3"
        zIndex="0"
      />
      
      <MotionContainer
        ref={containerRef}
        maxW="1140px"
        px={{ base: 6, md: 8 }}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        zIndex="1"
      >
        <Box textAlign="center" mb={16}>
          <Heading 
            size="2xl" 
            mb={4} 
            color={primaryHeadingColor}
            letterSpacing="tight"
          >
            Pricing Plans
          </Heading>
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color={secondaryHeadingColor} 
            maxW="700px" 
            mx="auto"
            fontWeight="medium"
          >
            Choose the perfect plan for your fitness journey
          </Text>
        </Box>

        <Flex 
          direction={{ base: "column", lg: "row" }} 
          gap={{ base: 8, lg: 6 }}
          justify="center"
          align={{ base: "center", lg: "stretch" }}
        >
          {pricingPlans.map((plan, index) => (
            <MotionBox
              key={index}
              variants={cardVariants}
              w={{ base: "100%", md: "80%", lg: "33.333%" }}
              maxW="360px"
              bg={plan.isRecommended ? highlightedCardBg : bgColor}
              borderRadius="xl"
              overflow="hidden"
              boxShadow={plan.isRecommended ? "lg" : "md"}
              borderWidth="1px"
              borderColor={plan.isRecommended ? accentColor : cardBorderColor}
              position="relative"
              transform={plan.isRecommended ? { lg: "scale(1.05)" } : "none"}
              zIndex={plan.isRecommended ? 2 : 1}
              transition="all 0.3s ease"
              _hover={{
                transform: { lg: plan.isRecommended ? "scale(1.07)" : "scale(1.02)" },
                boxShadow: plan.isRecommended ? "xl" : "lg",
              }}
              {...(plan.isRecommended && { 
                variants: pulseVariants,
                animate: isInView ? "pulse" : ""
              })}
            >
              {plan.isRecommended && (
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  mt="-2px"
                  mr="-2px"
                  overflow="hidden"
                  width="120px"
                  height="120px"
                >
                  <Box
                    position="absolute"
                    top="0"
                    right="0"
                    width="150px"
                    transform="rotate(45deg) translateX(38px) translateY(-30px)"
                    bg={accentColor}
                    py={1}
                    textAlign="center"
                  >
                    <Text fontSize="xs" fontWeight="bold" color="white">
                      BEST PICK
                    </Text>
                  </Box>
                </Box>
              )}

              <Box p={8}>
                <VStack spacing={4} align="stretch">
                  <HStack>
                    {plan.isRecommended && (
                      <Icon as={FaStar} color={accentColor} mr={2} />
                    )}
                    <Heading size="lg" color={headingColor}>
                      {plan.title}
                    </Heading>
                  </HStack>

                  <Text fontSize="md" color={textColor} minH="50px">
                    {plan.description}
                  </Text>

                  <Box py={4}>
                    <Heading size="2xl" color={plan.isRecommended ? accentColor : primaryHeadingColor}>
                      {plan.price}
                    </Heading>
                    <Text fontSize="sm" color={subtleTextColor} mt={1}>
                      {plan.period}
                    </Text>
                  </Box>

                  <VStack spacing={3} align="stretch" my={2}>
                    {plan.features.map((feature, i) => (
                      <HStack key={i} spacing={3} align="center">
                        <Icon as={FaCheck} color={checkIconColor} boxSize={3} />
                        <Text fontSize="sm" color={bodyTextColor}>
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Button
                    as={motion.button}
                    mt={6}
                    py={6}
                    fontWeight="bold"
                    colorScheme={plan.isRecommended ? "green" : "gray"}
                    bg={plan.isRecommended ? buttonBg : "transparent"}
                    color={plan.isRecommended ? "white" : accentColor}
                    border="2px solid"
                    borderColor={plan.isRecommended ? buttonBg : accentColor}
                    _hover={{
                      bg: plan.isRecommended ? buttonHoverBg : buttonHoverBgAlt,
                      transform: "translateY(-2px)"
                    }}
                    _active={{
                      transform: "scale(0.98)"
                    }}
                    transition="all 0.2s ease"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {plan.cta}
                  </Button>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </Flex>
      </MotionContainer>
    </Box>
  );
};

export default Pricing;