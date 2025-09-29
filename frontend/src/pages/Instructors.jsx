import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Instructors = () => {
  return (
    <Container id="instructors" maxW="1140px" py={10}>
      <Box textAlign="center">
        <Heading size="2xl" mb={4}>
          Our Instructors
        </Heading>
        <Text fontSize="lg" color="green.600">
          Meet our certified Pilates instructors.
        </Text>
      </Box>
    </Container>
  );
};

export default Instructors;
