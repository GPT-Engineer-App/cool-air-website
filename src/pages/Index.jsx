import { ChakraProvider, Box, VStack, Heading, Text, Button, Image, Container, HStack, Icon, SimpleGrid, GridItem, Divider } from "@chakra-ui/react";
import { FaRegSnowflake, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider>
      <Box bg="blue.50" minH="100vh">
        <Container maxW="container.xl">
          {/* Hero section */}
          <VStack spacing={8} py={16} textAlign="center">
            <Heading as="h1" size="2xl" fontWeight="extrabold">
              Refrigeration & Air Conditioning Services
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Your comfort is our priority. Get the best services for your home and office cooling systems.
            </Text>
            <Button colorScheme="blue" size="lg" leftIcon={<FaRegSnowflake />}>
              Get a Quote
            </Button>
          </VStack>

          {/* Hero image */}
          <Box py={10} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmd8ZW58MHx8fHwxNzA5NTc4MjY0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          </Box>

          {/* Services section */}
          <VStack spacing={8} py={16} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="bold">
              Our Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <ServiceBox title="AC Installation" icon={FaRegSnowflake} />
              <ServiceBox title="AC Repair" icon={FaRegSnowflake} />
              <ServiceBox title="Regular Maintenance" icon={FaRegSnowflake} />
            </SimpleGrid>
          </VStack>

          {/* Contact section */}
          <VStack spacing={4} py={16} textAlign="center">
            <Heading as="h3" size="lg" fontWeight="bold">
              Get In Touch
            </Heading>
            <HStack spacing={4} justifyContent="center">
              <Button leftIcon={<FaPhoneAlt />} colorScheme="teal" variant="ghost">
                Call Us
              </Button>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="ghost">
                Email Us
              </Button>
            </HStack>
            <Text color="gray.500">We're available 24/7 for emergency services</Text>
          </VStack>

          {/* Footer */}
          <Box bg="blue.800" color="white">
            <Container maxW="container.xl" py={4}>
              <VStack spacing={4}>
                <HStack justifyContent="center" spacing={6}>
                  <Icon as={FaFacebook} w={6} h={6} />
                  <Icon as={FaTwitter} w={6} h={6} />
                  <Icon as={FaInstagram} w={6} h={6} />
                </HStack>
                <Divider />
                <Text>&copy; {new Date().getFullYear()} Refrigeration & Air Conditioning Services</Text>
              </VStack>
            </Container>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

// ServiceBox component for services section
const ServiceBox = ({ title, icon }) => {
  return (
    <VStack p={5} bg="white" boxShadow="md" borderRadius="md" _hover={{ boxShadow: "lg" }}>
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight="bold">{title}</Text>
      <Text color="gray.500" fontSize="sm">
        High-quality service provided by certified professionals.
      </Text>
    </VStack>
  );
};

export default Index;
