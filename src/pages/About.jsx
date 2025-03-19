import { Box, Heading, Text, VStack, Button, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const About = () => {
  return (
    <MotionBox
      minH="100vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={6}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      bg="white"
      color="black"
    >
      <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
        Smarter Investing, Simplified.
      </Heading>

      <Text maxW="800px" mt={4} fontSize="lg" opacity={0.8}>
        At <strong>NexArtha</strong>, we are redefining wealth management with{" "}
        <span style={{ color: "#5A67D8", fontWeight: "bold" }}>
          intelligent insights
        </span>{" "}
        and data-driven tools. Our mission is to make investing{" "}
        <span style={{ color: "#5A67D8", fontWeight: "bold" }}>
          accessible, transparent, and efficient
        </span>{" "}
        for everyone.
      </Text>

      <Divider my={8} w="80px" borderColor="gray.400" />

      {/* Key Features */}
      <VStack mt={6} spacing={6} maxW="700px" align="stretch">
        <Box
          textAlign="left"
          p={6}
          bg="gray.100"
          borderRadius="lg"
          shadow="sm"
          transition="all 0.3s"
          _hover={{ shadow: "md", transform: "scale(1.02)" }}
        >
          <Heading fontSize="xl" color="#5A67D8">
            ❌ Not SEBI-Registered. No Financial Advice.
          </Heading>
          <Text opacity={0.8} mt={2}>
            We don’t provide investment advice. Instead, we offer{" "}
            <strong>powerful tools</strong> to help you analyze mutual funds,
            assess risk, and explore asset allocation strategies—so you can make
            your own informed financial decisions.
          </Text>
        </Box>

        <Box
          textAlign="left"
          p={6}
          bg="gray.100"
          borderRadius="lg"
          shadow="sm"
          transition="all 0.3s"
          _hover={{ shadow: "md", transform: "scale(1.02)" }}
        >
          <Heading fontSize="xl" color="#5A67D8">
            🔹 What We Offer
          </Heading>
          <Text opacity={0.8} mt={2}>
            ✅ <strong>Educational Insights</strong> – Understand the world of
            mutual funds with well-researched insights. <br />
            ✅ <strong>Portfolio Optimization</strong> – Get personalized fund
            suggestions based on your risk profile and time horizon. <br />
            ✅ <strong>Return Calculator</strong> – Estimate your investment
            growth with historical data-driven projections.
          </Text>
        </Box>

        <Box
          textAlign="left"
          p={6}
          bg="gray.100"
          borderRadius="lg"
          shadow="sm"
          transition="all 0.3s"
          _hover={{ shadow: "md", transform: "scale(1.02)" }}
        >
          <Heading fontSize="xl" color="#5A67D8">
            🚀 Why NexArtha?
          </Heading>
          <Text opacity={0.8} mt={2}>
            ⚡ <strong>AI-Powered Insights</strong> – Navigate investments
            smarter with intelligent analysis. <br />
            🎯 <strong>Minimalist, Distraction-Free UI</strong> – Designed for
            clarity and ease of use. <br />
            🔍 <strong>Full Transparency</strong> – No hidden recommendations.
            You’re in control of your decisions.
          </Text>
        </Box>
      </VStack>

      <Text fontSize="xl" mt={10} opacity={0.9} fontWeight="medium">
        💡 Invest with Knowledge. Build with Confidence.
      </Text>

      <Button
        mt={6}
        size="lg"
        bg="#5A67D8"
        color="white"
        _hover={{ bg: "#4C51BF" }}
      >
        Start Exploring
      </Button>
    </MotionBox>
  );
};

export default About;
