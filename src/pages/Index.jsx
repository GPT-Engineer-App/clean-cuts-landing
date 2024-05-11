import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCut, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh" bg="white">
        {/* Navigation Bar */}
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={6} borderBottom="1px" borderColor="gray.200">
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              <FaCut /> SalonSling
            </Heading>
          </Flex>

          <Stack direction="row" spacing={4}>
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </Stack>
        </Flex>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg="gray.50" py={20}>
          <VStack spacing={4}>
            <Heading as="h2" size="2xl" fontWeight="bold" textAlign="center">
              Styling Your Hair with Precision and Care
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Discover the latest trends with our expert stylists.
            </Text>
            <Button colorScheme="pink" size="lg">
              Book an Appointment
            </Button>
          </VStack>
        </Flex>

        {/* Services Section */}
        <Box id="services" py={10}>
          <VStack spacing={5}>
            <Heading as="h3" size="xl">
              Our Services
            </Heading>
            <Stack direction={["column", "row"]} spacing={8}>
              <ServiceCard title="Hair Cutting" description="Get a fresh look with our expert hair cutting services." icon={<FaCut />} />
              <ServiceCard title="Coloring" description="Brighten your day with vibrant colors tailored to your taste." icon={<FaCut />} />
              <ServiceCard title="Styling" description="Perfect your look with our professional styling for any occasion." icon={<FaCut />} />
            </Stack>
          </VStack>
        </Box>

        {/* About Section */}
        <Flex id="about" bg="gray.100" p={10} align="center" justify="center">
          <VStack spacing={3}>
            <Heading as="h3" size="xl">
              About Us
            </Heading>
            <Text fontSize="md" color="gray.600" maxW="container.md" textAlign="center">
              At SalonSling, we believe in beauty with a conscience. We have created a salon that offers the highest quality hair services in a setting that is healthier for the environment, our guests, and our staff.
            </Text>
          </VStack>
        </Flex>

        {/* Contact Section */}
        <Box id="contact" p={10}>
          <VStack spacing={3}>
            <Heading as="h3" size="xl">
              Contact Us
            </Heading>
            <Text fontSize="md" color="gray.600">
              <FaPhone /> +123 456 7890
            </Text>
            <Text fontSize="md" color="gray.600">
              <FaMapMarkerAlt /> 123 Main St, Hometown, HT
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="https://instagram.com" isExternal>
                <FaInstagram />
              </Link>
              <Link href="https://facebook.com" isExternal>
                <FaFacebookF />
              </Link>
            </Stack>
          </VStack>
        </Box>

        {/* Footer */}
        <Flex as="footer" py={4} bg="gray.200" mt="auto" justify="center">
          <Text fontSize="sm">© 2023 SalonSling. All rights reserved.</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

const ServiceCard = ({ title, description, icon }) => (
  <VStack bg="white" boxShadow="md" p={5} borderRadius="md" align="center" spacing={3}>
    <Box fontSize="3xl" color="pink.400">
      {icon}
    </Box>
    <Text fontWeight="bold" fontSize="xl">
      {title}
    </Text>
    <Text textAlign="center" color="gray.600">
      {description}
    </Text>
  </VStack>
);

export default Index;
