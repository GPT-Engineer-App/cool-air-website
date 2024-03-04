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
              Kälte- und Klimaanlagenservice
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Ihr Komfort ist unsere Priorität. Erhalten Sie die besten Dienstleistungen für Ihre Haus- und Bürokühlsysteme.
            </Text>
            <Button colorScheme="blue" size="lg" leftIcon={<FaRegSnowflake />}>
              Angebot einholen
            </Button>
          </VStack>

          {/* Hero image */}
          <Box py={10} textAlign="center">
            <Image src="https://via.placeholder.com/1080" borderRadius="md" />
          </Box>

          {/* Services section */}
          <VStack spacing={8} py={16} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="bold">
              Unsere Dienstleistungen
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <ServiceBox title="Klimaanlageninstallation" icon={FaRegSnowflake} />
              <ServiceBox title="Klimaanlagenreparatur" icon={FaRegSnowflake} />
              <ServiceBox title="Regelmäßige Wartung" icon={FaRegSnowflake} />
            </SimpleGrid>
          </VStack>

          {/* Contact section */}
          <VStack spacing={4} py={16} textAlign="center">
            <Heading as="h3" size="lg" fontWeight="bold">
              Kontaktieren Sie Uns
            </Heading>
            <HStack spacing={4} justifyContent="center">
              <Button leftIcon={<FaPhoneAlt />} colorScheme="teal" variant="ghost">
                Rufen Sie uns an
              </Button>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="ghost">
                Schreiben Sie uns eine E-Mail
              </Button>
            </HStack>
            <Text color="gray.500">Wir sind rund um die Uhr für Notfalldienste verfügbar</Text>
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
                <Text>&copy; {new Date().getFullYear()} Kälte- und Klimaanlagenservice</Text>
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
