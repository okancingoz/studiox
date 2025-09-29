import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container id="about" maxW="1140px" py={10}>
      <Box textAlign="center">
        <Heading size="2xl" mb={4}>
          About StudioX
        </Heading>
        <Text fontSize="lg" color="green.600">
          Learn about our mission and the art of Pilates.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </Container>
  );
};

export default About;
