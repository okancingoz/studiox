import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  Stack,
  Icon,
  VStack,
  HStack,
  Heading,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon in react-leaflet
// This is required because webpack handles assets differently
// We need to manually specify the marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Footer = () => {
  // State to track if the map is loaded in the client
  const [isMounted, setIsMounted] = useState(false);
  
  // Colors based on theme
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const accentColor = useColorModeValue("green.500", "green.400");
  const sectionBgColor = useColorModeValue("green.50", "gray.800");
  const borderColor = useColorModeValue("green.100", "green.700");
  const mapBorderColor = useColorModeValue("green.300", "green.700");
  const iconHoverColor = useColorModeValue("green.600", "green.300");
  const footerBottomBgColor = useColorModeValue("green.700", "green.900");
  
  // Example location for the map (New York City)
  const location = { lat: 40.7128, lng: -74.006 };
  
  // Client-side only rendering for the map
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Social media links
  const socialLinks = [
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
    { icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
    { icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  ];
  
  return (
    <Box bg={bgColor} color={textColor} position="relative">
      {/* Main footer content */}
      <Box py={16} bg={sectionBgColor}>
        <Container maxW="1140px" px={{ base: 4, md: 6 }}>
          <Flex 
            direction={{ base: "column", lg: "row" }} 
            justify="center"
            align="stretch"
            gap={0}
            boxShadow="lg"
            borderRadius="lg"
            overflow="hidden"
          >
            {/* Map Section */}
            <Box 
              flex={{ lg: 1 }} 
              h={{ base: "300px", lg: "450px" }} 
              borderLeftRadius="lg"
              borderRightRadius={{ base: "lg", lg: 0 }}
              overflow="hidden"
              border="1px solid"
              borderColor={mapBorderColor}
              borderRight={{ lg: "none" }}
            >
              {isMounted && (
                <MapContainer 
                  center={location} 
                  zoom={13} 
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker 
                    position={location}
                    icon={new L.Icon({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41],
                      popupAnchor: [1, -34],
                      shadowSize: [41, 41]
                    })}
                  >
                    <Popup>
                      StudioX <br /> Your premier fitness destination.
                    </Popup>
                  </Marker>
                </MapContainer>
              )}
            </Box>
            
            {/* Contact & Social Media Section */}
            <VStack 
              flex={{ lg: 1 }} 
              spacing={8} 
              align={{ base: "center", lg: "flex-start" }}
              justify="center"
              p={{ base: 4, lg: 8 }}
              bg={useColorModeValue("white", "gray.800")}
              borderRightRadius="lg"
              borderLeftRadius={{ base: "lg", lg: 0 }}
              borderWidth="1px"
              borderLeftWidth={{ lg: 0 }}
              borderColor={borderColor}
              h={{ lg: "450px" }}
            >
              {/* Studio Information */}
              <VStack spacing={4} align={{ base: "center", lg: "flex-start" }}>
                <Heading 
                  as="h3" 
                  size="lg"
                  color={accentColor}
                  fontWeight="bold"
                  letterSpacing="tight"
                >
                  StudioX
                </Heading>
                <Text fontSize="md" color={useColorModeValue("green.600", "green.300")}>
                  Your premier fitness destination
                </Text>
                
                <Divider borderColor={borderColor} opacity={0.6} />
                
                {/* Contact Information */}
                <VStack spacing={3} align={{ base: "center", lg: "flex-start" }} pt={2}>
                  <HStack>
                    <Icon as={FaMapMarkerAlt} color={accentColor} boxSize={5} />
                    <Text fontSize="md" color={useColorModeValue("green.700", "green.300")}>
                      123 Fitness Avenue, New York, NY 10001
                    </Text>
                  </HStack>
                  
                  <HStack>
                    <Icon as={FaPhone} color={accentColor} boxSize={5} />
                    <Link href="tel:+12125551234" color={useColorModeValue("green.700", "green.300")} _hover={{ color: accentColor }}>
                      +1 (212) 555-1234
                    </Link>
                  </HStack>
                  
                  <HStack>
                    <Icon as={FaEnvelope} color={accentColor} boxSize={5} />
                    <Link href="mailto:info@studiox.com" color={useColorModeValue("green.700", "green.300")} _hover={{ color: accentColor }}>
                      info@studiox.com
                    </Link>
                  </HStack>
                </VStack>
              </VStack>
              
              {/* Social Media Links */}
              <VStack spacing={4} align={{ base: "center", lg: "flex-start" }}>
                <Heading as="h4" size="md" color={accentColor}>
                  Connect With Us
                </Heading>
                
                <HStack spacing={4}>
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      isExternal
                      aria-label={social.label}
                    >
                      <Icon
                        as={social.icon}
                        boxSize={6}
                        color={accentColor}
                        _hover={{
                          color: iconHoverColor,
                          transform: "translateY(-2px)",
                        }}
                        transition="all 0.3s ease"
                      />
                    </Link>
                  ))}
                </HStack>
                
                <Text fontSize="sm" color={useColorModeValue("green.600", "green.300")} maxW="400px" pt={2}>
                  Join our community and stay updated with the latest classes, events, and wellness tips.
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Container>
      </Box>
      
      {/* Copyright Footer */}
      <Box py={4} bg={footerBottomBgColor} color="white">
        <Container maxW="1140px" px={{ base: 4, md: 6 }}>
          <Flex 
            direction={{ base: "column", md: "row" }} 
            justify="space-between"
            align="center"
            gap={{ base: 2, md: 0 }}
          >
            <Text fontSize="sm">
              &copy; {new Date().getFullYear()} StudioX. All rights reserved.
            </Text>
            <HStack spacing={4}>
              <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
                Privacy Policy
              </Link>
              <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
                Terms of Service
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;