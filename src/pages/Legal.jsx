import { useEffect, useRef } from "react";
import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const MotionBox = motion(Box);

export default function Legal() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current.children, {
      // opacity: 0,
      // y: 50,
      // stagger: 0.2,
      // duration: 0.8
    });
  }, []);

  return (
    <Container maxW="container.lg" py={10} ref={containerRef}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="xl" color="blue.500">Legal Disclaimer</Heading>
          
          <Text fontSize="lg">
            At NexArtha, we are committed to simplifying investment decisions by providing educational insights about mutual funds and investment strategies. While we are not SEBI-registered and do not offer financial advice or specific recommendations, our platform empowers users with the tools and knowledge needed to make informed investment choices.
          </Text>

          <Box bg="gray.50" p={6} borderRadius="lg">
            <Heading size="md" mb={4} color="blue.600">Our Key Offerings</Heading>
            <UnorderedList spacing={3}>
              <ListItem>
                <Text fontWeight="bold">Investment Insights</Text>
                <Text>Educational content to help you understand mutual funds and asset allocation.</Text>
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Portfolio Analysis Tools</Text>
                <Text>Calculate potential returns based on different asset classes and risk preferences.</Text>
              </ListItem>
              <ListItem>
                <Text fontWeight="bold">Fund Selection Assistance</Text>
                <Text>Explore mutual fund categories and compare different options to suit your needs.</Text>
              </ListItem>
            </UnorderedList>
          </Box>

          <Text fontSize="lg" mt={4}>
            We believe in financial literacy and transparency, ensuring that every investor has access to objective, data-driven tools to navigate the world of investing with confidence.
          </Text>
        </VStack>
      </MotionBox>
    </Container>
  );
}
