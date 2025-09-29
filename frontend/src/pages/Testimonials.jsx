import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <Container id="testimonials" maxW="1140px" py={10}>
      <Box textAlign="center">
        <Heading size="2xl" mb={4}>
          Testimonials
        </Heading>
        <Text fontSize="lg" color="green.600">
          Hear what our clients have to say about their experience.
        </Text>
      </Box>
    </Container>
  );
};

export default Testimonials;
