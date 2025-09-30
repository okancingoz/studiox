import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  FormErrorMessage,
  useColorModeValue,
  Icon,
  Image,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Leaf, User, Mail, Phone, MessageSquare } from "lucide-react";
import contactImage from "../assets/images/contact/contact.jpg";

// Create motion components
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionImage = motion.create(Image);
const MotionButton = motion.create(Button);

const Contact = () => {
  // Form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Form touched state
  const [touched, setTouched] = useState({});
  
  // Animation controls and refs
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Colors based on theme - structured for text hierarchy
  const formBgColor = useColorModeValue("green.50", "#030903");
  const inputBgColor = useColorModeValue("white", "#030903");
  
  // Text Hierarchy Colors
  const primaryHeadingColor = useColorModeValue("green.800", "green.100");    // Main headings (h2, h3)
  const secondaryHeadingColor = useColorModeValue("green.700", "green.200");  // Subheadings (h4)
  const bodyTextColor = useColorModeValue("green.700", "green.300");          // Body text
  const subtleTextColor = useColorModeValue("green.600", "green.400");        // Form labels, captions
  const accentColor = useColorModeValue("green.500", "green.400");            // Accent/brand color
  
  // No backward compatibility needed as we've updated all instances
  
  // UI Colors
  const borderColor = useColorModeValue("green.300", "green.600");
  
  // Animation effect
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
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
        duration: 0.6
      }
    }
  };
  
  const formVariants = {
    hidden: { x: -70, opacity: 0, scale: 0.97 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.9
      }
    }
  };
  
  const imageVariants = {
    hidden: { x: 70, opacity: 0, scale: 0.97 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.9
      }
    }
  };
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    
    // Validate field on change if it's been touched
    if (touched[name]) {
      validateField(name, value);
    }
  };
  
  // Handle blur events for validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Set field as touched
    setTouched({
      ...touched,
      [name]: true
    });
    
    // Validate the field
    validateField(name, value);
  };
  
  // Field validation
  const validateField = (name, value) => {
    let newErrors = { ...errors };
    
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) {
          newErrors[name] = "This field is required";
        } else {
          delete newErrors[name];
        }
        break;
        
      case "email":
        if (!value) {
          newErrors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          newErrors.email = "Invalid email address";
        } else {
          delete newErrors.email;
        }
        break;
        
      case "phone":
        if (value && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(value)) {
          newErrors.phone = "Invalid phone number";
        } else {
          delete newErrors.phone;
        }
        break;
        
      case "message":
        if (!value.trim()) {
          newErrors.message = "Please enter a message";
        } else {
          delete newErrors.message;
        }
        break;
        
      default:
        break;
    }
    
    setErrors(newErrors);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const touchedFields = {};
    Object.keys(formState).forEach(key => {
      touchedFields[key] = true;
    });
    setTouched(touchedFields);
    
    // Validate all fields
    let formErrors = {};
    Object.keys(formState).forEach(key => {
      validateField(key, formState[key]);
      if (errors[key]) {
        formErrors[key] = errors[key];
      }
    });
    
    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      // Form submission logic would go here
      console.log("Form submitted:", formState);
      alert("Thank you for contacting us! We'll get back to you soon.");
      
      // Reset the form
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
      setTouched({});
    } else {
      setErrors(formErrors);
    }
  };
  
  // Decorative Element component
  const DecorativeElement = ({ top, right, left, bottom, size, rotate }) => {
    return (
      <Box
        position="absolute"
        top={top}
        right={right}
        left={left}
        bottom={bottom}
        zIndex="0"
      >
        <Icon
          as={Leaf}
          w={size}
          h={size}
          color={useColorModeValue("green.400", "green.800")}
          transform={`rotate(${rotate}deg)`}
          opacity={useColorModeValue("0.25", "0.4")}
        />
      </Box>
    );
  };

  return (
    <Box 
      id="contact" 
      height="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      bg={useColorModeValue("white", "#030903")}
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="5%"
        left="-10%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg={useColorModeValue("green.50", "#030903")}
        opacity="0.3"
        zIndex="0"
      />
      
      <Box
        position="absolute"
        bottom="-10%"
        right="-5%"
        width="400px"
        height="400px"
        borderRadius="full"
        bg={useColorModeValue("green.50", "#030903")}
        opacity="0.3"
        zIndex="0"
      />
      
      {/* Decorative leaf elements */}
      <Icon
        as={Leaf}
        position="absolute"
        top="10%"
        right="15%"
        color={useColorModeValue("green.400", "green.800")}
        boxSize="4rem"
        opacity={useColorModeValue("0.15", "0.2")}
        transform="rotate(45deg)"
        zIndex="0"
      />
      
      <Icon
        as={Leaf}
        position="absolute"
        bottom="15%"
        left="10%"
        color={useColorModeValue("green.400", "green.800")}
        boxSize="3rem"
        opacity={useColorModeValue("0.12", "0.15")}
        transform="rotate(-30deg)"
        zIndex="0"
      />
      
      <Container
        maxW="1140px"
        height="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        px={{ base: 4, md: 6 }}
        position="relative"
        zIndex="1"
        ref={containerRef}
      >
        <Box textAlign="center" mb={8}>
          <Heading
            as="h2"
            size="2xl"
            mb={3}
            color={primaryHeadingColor}
            letterSpacing="tight"
          >
            Get In Touch
          </Heading>
        </Box>
        
        <MotionFlex
          direction={{ base: "column", lg: "row" }}
          gap={0}
          align="stretch"
          boxShadow="xl"
          borderRadius="lg"
          overflow="hidden"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          maxH={{ lg: "80vh" }}
          w="100%"
        >
          {/* Contact Form */}
          <MotionBox
            flex="1"
            bg={formBgColor}
            p={{ base: 6, md: 8 }}
            variants={formVariants}
            position="relative"
            zIndex="1"
            borderRightRadius={{ base: "lg", lg: 0 }}
            maxH={{ lg: "80vh" }}
            overflowY={{ lg: "auto" }}
          >
            {/* Decorative elements */}
            <DecorativeElement top="10px" left="10px" size={8} rotate={45} />
            <DecorativeElement bottom="40px" right="30px" size={10} rotate={120} />
            <DecorativeElement top="40%" right="5%" size={6} rotate={90} />
            
            <form onSubmit={handleSubmit}>
              <VStack spacing={6} align="stretch">
                <Flex gap={4} direction={{ base: "column", sm: "row" }}>
                  <FormControl isInvalid={errors.firstName && touched.firstName}>
                    <FormLabel htmlFor="firstName" color={secondaryHeadingColor}>First Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={User} color="green.400" />
                      </InputLeftElement>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        bg={inputBgColor}
                        border="1px solid"
                        borderColor={borderColor}
                        value={formState.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        color={bodyTextColor}
                        pl="2.5rem"
                        _focus={{
                          borderColor: accentColor,
                          boxShadow: "0 0 0 1px var(--chakra-colors-green-500)"
                        }}
                        _placeholder={{ color: subtleTextColor }}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.lastName && touched.lastName}>
                    <FormLabel htmlFor="lastName" color={secondaryHeadingColor}>Last Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={User} color={accentColor} />
                      </InputLeftElement>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        bg={inputBgColor}
                        border="1px solid"
                        borderColor={borderColor}
                        value={formState.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        color={bodyTextColor}
                        pl="2.5rem"
                        _focus={{
                          borderColor: accentColor,
                          boxShadow: "0 0 0 1px var(--chakra-colors-green-500)"
                        }}
                        _placeholder={{ color: subtleTextColor }}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>
                </Flex>

                <FormControl isInvalid={errors.email && touched.email}>
                  <FormLabel htmlFor="email" color={secondaryHeadingColor}>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={Mail} color={accentColor} />
                    </InputLeftElement>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      bg={inputBgColor}
                      border="1px solid"
                      borderColor={borderColor}
                      value={formState.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      color={bodyTextColor}
                      pl="2.5rem"
                      _focus={{
                        borderColor: accentColor,
                        boxShadow: "0 0 0 1px var(--chakra-colors-green-500)"
                      }}
                      _placeholder={{ color: subtleTextColor }}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.phone && touched.phone}>
                  <FormLabel htmlFor="phone" color={secondaryHeadingColor}>Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={Phone} color={accentColor} />
                    </InputLeftElement>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      bg={inputBgColor}
                      border="1px solid"
                      borderColor={borderColor}
                      value={formState.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      color={bodyTextColor}
                      pl="2.5rem"
                      _focus={{
                        borderColor: accentColor,
                        boxShadow: "0 0 0 1px var(--chakra-colors-green-500)"
                      }}
                      _placeholder={{ color: subtleTextColor }}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.phone}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.message && touched.message}>
                  <FormLabel htmlFor="message" color={secondaryHeadingColor}>Message</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={MessageSquare} color={accentColor} mt="0.5rem" />
                    </InputLeftElement>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      bg={inputBgColor}
                      border="1px solid"
                      borderColor={borderColor}
                      value={formState.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      color={bodyTextColor}
                      pl="2.5rem"
                      rows={5}
                      _focus={{
                        borderColor: accentColor,
                        boxShadow: "0 0 0 1px var(--chakra-colors-green-500)"
                      }}
                      _placeholder={{ color: subtleTextColor }}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>

                <MotionButton
                  type="submit"
                  bg="green.600"
                  color="white"
                  size="lg"
                  width="100%"
                  minH="48px"
                  _hover={{ bg: "green.700" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition="all 0.2s ease"
                  mt={4}
                  aria-label="Submit contact form"
                >
                  Send Message
                </MotionButton>
              </VStack>
            </form>
          </MotionBox>
          
          {/* Contact Image */}
          <MotionBox
            flex="1"
            display={{ base: "none", lg: "block" }}
            variants={imageVariants}
            position="relative"
            maxH={{ lg: "80vh" }}
            h={{ lg: "100%" }}
          >
            <MotionImage
              src={contactImage}
              alt="Contact Us"
              objectFit="cover"
              w="100%"
              h="100%"
              maxH={{ lg: "80vh" }}
              borderLeftRadius={0}
              borderRightRadius="lg"
            />
            
            {/* Overlay with decorative elements */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.1)"
              backdropFilter="blur(1px)"
              zIndex="1"
              borderLeftRadius={0}
              borderRightRadius="lg"
            >
              {/* Additional decorative elements on image */}
              <Box
                position="absolute"
                top="20px"
                left="20px"
                width="60px"
                height="60px"
                opacity="0.6"
                borderTop="2px solid white"
                borderLeft="2px solid white"
              />
              
              <Box
                position="absolute"
                bottom="20px"
                right="20px"
                width="60px"
                height="60px"
                opacity="0.6"
                borderBottom="2px solid white"
                borderRight="2px solid white"
              />
            </Box>
          </MotionBox>
        </MotionFlex>
      </Container>
    </Box>
  );
};

export default Contact;
