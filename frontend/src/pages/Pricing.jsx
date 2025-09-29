import { Box, Heading, Text, Container } from '@chakra-ui/react';

const Pricing = () => {
  return (
    <Container id='pricing' maxW="1140px" py={10}>
      <Box textAlign="center">
        <Heading size="2xl" mb={4}>
          Pricing Plans
        </Heading>
        <Text fontSize="lg" color="green.600">
          Choose the perfect plan for your Pilates journey.
        </Text>
      </Box>
    </Container>
  );
};

export default Pricing;