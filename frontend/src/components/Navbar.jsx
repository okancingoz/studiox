import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { MdDarkMode, MdLightMode } from "react-icons/md";

// Import React Router components - these should be wrapped in a Router provider
import { Link as RouterLink, useLocation } from "react-router-dom";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);

const navLinks = [
  { name: "Home", path: "#", sectionId: "home" },
  { name: "About", path: "#about", sectionId: "about" },

  { name: "Testimonials", path: "#testimonials", sectionId: "testimonials" },
  { name: "Instructors", path: "#instructors", sectionId: "instructors" },
  { name: "Pricing", path: "#pricing", sectionId: "pricing" },
  { name: "Contact", path: "#contact", sectionId: "contact" },
];

const NavLink = ({ children, to, sectionId, onClick, isMobile = false }) => {
  const location = useLocation();
  // For scroll-based navigation, we'll consider Home as active when on the main page
  const isActive =
    (location.pathname === "/" && sectionId === "home") ||
    (location.hash === to && to !== "#");

  const handleClick = (e) => {
    e.preventDefault();
    if (sectionId === "home") {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to specific section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    if (onClick) onClick();
  };

  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={to}
        onClick={handleClick}
        px={isMobile ? 4 : 3}
        py={isMobile ? 3 : 2}
        rounded="lg"
        color={useColorModeValue(
          isActive ? "green.700" : "green.600",
          isActive ? "green.200" : "green.300"
        )}
        bg={useColorModeValue(
          isActive ? "green.100" : "transparent",
          isActive ? "green.800" : "transparent"
        )}
        fontWeight={isActive ? "bold" : "medium"}
        fontSize={isMobile ? "lg" : "md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("green.100", "green.800"),
          color: useColorModeValue("green.800", "green.100"),
        }}
        _focus={{
          outline: "none",
          boxShadow: `0 0 0 2px ${useColorModeValue("#17a854", "#99eabb")}`,
        }}
        transition="all 0.3s ease"
        w={isMobile ? "full" : "auto"}
        textAlign={isMobile ? "left" : "center"}
      >
        {children}
      </Link>
    </MotionBox>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const navBg = useColorModeValue("green.50", "black.900");
  const navBorder = useColorModeValue("green.200", "green.700");

  // Pre-compute color values for drawer to avoid conditional hook calls
  const drawerBg = useColorModeValue("green.50", "green.900");
  const drawerBorder = useColorModeValue("green.200", "green.700");
  const drawerCloseColor = useColorModeValue("green.600", "green.300");
  const drawerCloseHoverBg = useColorModeValue("green.100", "green.800");
  const logoColorMobile = useColorModeValue("green.700", "green.200");

  const drawerVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Box
      bg={navBg}
      borderBottom="1px"
      borderColor={navBorder}
      position="sticky"
      top="0"
      zIndex="sticky"
      backdropFilter="blur(10px)"
      boxShadow="sm"
    >
      <Container maxW="1140px" px={{ base: 4, md: 6 }}>
        <Flex h="70px" alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              as={RouterLink}
              to="/"
              fontSize="2xl"
              fontWeight="bold"
              color={useColorModeValue("green.700", "green.200")}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("green.800", "green.100"),
              }}
              transition="all 0.3s ease"
            >
              StudioX
            </Link>
          </MotionBox>

          {/* Desktop Navigation */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                sectionId={link.sectionId}
              >
                {link.name}
              </NavLink>
            ))}
          </HStack>

          {/* Right side - Color mode toggle + Mobile menu */}
          <HStack spacing={3}>
            {/* Color Mode Toggle */}
            <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                size="md"
                icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
                aria-label="Toggle color mode"
                variant="ghost"
                color={useColorModeValue("green.600", "green.300")}
                _hover={{
                  bg: useColorModeValue("green.100", "green.800"),
                  color: useColorModeValue("green.800", "green.100"),
                }}
                onClick={toggleColorMode}
                rounded="lg"
              />
            </MotionBox>

            {/* Mobile menu button */}
            <MotionBox
              display={{ base: "block", md: "none" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                size="md"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label="Toggle navigation menu"
                variant="ghost"
                color={useColorModeValue("green.600", "green.300")}
                _hover={{
                  bg: useColorModeValue("green.100", "green.800"),
                  color: useColorModeValue("green.800", "green.100"),
                }}
                onClick={isOpen ? onClose : onOpen}
                rounded="lg"
              />
            </MotionBox>
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
            <DrawerOverlay />
            <DrawerContent
              bg={drawerBg}
              borderRight="1px"
              borderColor={drawerBorder}
              maxW="300px"
            >
              <MotionBox
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={drawerVariants}
                h="full"
              >
                <DrawerCloseButton
                  color={drawerCloseColor}
                  _hover={{
                    bg: drawerCloseHoverBg,
                  }}
                />
                <DrawerBody pt={16}>
                  <MotionVStack
                    spacing={2}
                    align="stretch"
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Mobile Logo */}
                    <Box mb={6}>
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color={logoColorMobile}
                        textAlign="center"
                      >
                        StudioX
                      </Text>
                    </Box>

                    {/* Mobile Navigation Links */}
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        custom={index}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <NavLink
                          to={link.path}
                          sectionId={link.sectionId}
                          onClick={onClose}
                          isMobile
                        >
                          {link.name}
                        </NavLink>
                      </motion.div>
                    ))}
                  </MotionVStack>
                </DrawerBody>
              </MotionBox>
            </DrawerContent>
          </Drawer>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
