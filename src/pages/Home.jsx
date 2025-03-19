import { useState, useEffect } from "react";
import { Box, Button, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import illustration from "../assets/Image3.png";
import illustration3 from "../assets/footer-gradient.webp";
import illustration2 from "../assets/Home.png";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

// No imports needed after removing auth

const MotionBox = motion(Box);

const Home = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate("/portfolio");
  };

  return (
    <Box>
      <Header />

      {/* Hero Section */}
      <MotionBox
        bg="white"
        bgImage={illustration2}
        bgSize="cover"
        bgPosition="center"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        textAlign="center"
        px={4}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading 
          fontSize={{ base: "40px", md: "80px" }} 
          fontFamily="Telegraph" 
          color="black"
        >
          Simplifying the Investment
        </Heading>
        <Button
          mt={6}
          bg="black"
          color="white"
          _hover={{ bg: "gray.700" }}
          size="lg"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </MotionBox>

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <MotionBox
        bg="white"
        minH="100vh"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-around"
        p={{ base: 6, md: 10 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <VStack align="start" spacing={6} maxW={{ base: "90%", md: "40%" }}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>We innovate for optimal growth</Heading>
          <Image src={illustration} alt="Investment Illustration" maxW={{ base: "80%", md: "100%" }} />
        </VStack>

        <VStack align="start" spacing={6} maxW={{ base: "90%", md: "50%" }}>
          {[ 
            { title: "Personalized & Diversified", desc: "AI-driven, risk-adjusted portfolios tailored to your needs." },
            { title: "Better Growth Through Diversification", desc: "Create a balanced portfolio for long-term success." },
            { title: "Inclusive & Accessible Investing", desc: "Smart investing options for everyone." }
          ].map((item, index) => (
            <Box key={index}>
              <Heading fontSize="xl">{item.title}</Heading>
              <Text>{item.desc}</Text>
            </Box>
          ))}
        </VStack>
      </MotionBox>

      {/* Call to Action Section */}
      <MotionBox
  bg="black"
  bgImage={illustration3}
  backgroundSize="cover"  // Cover the full area
  backgroundPosition="center"  // Center the image
  backgroundRepeat="no-repeat" // Prevent repetition
  minH="80vh"
  display="flex"
  flexDir="column"
  alignItems="center"
  justifyContent="center"
  textAlign="center"
  p={6}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <Heading fontSize={{ base: "3xl", md: "5xl" }} color="white">
    Join the Future of Investing
  </Heading>
  <Text maxW="600px" mt={4} fontSize="lg" color="white">
    Experience AI-powered wealth management with NexArtha.
  </Text>
  <Button
    mt={6}
    size="lg"
    bg="white"
    color="black"
    _hover={{ bg: "gray.200" }}
    onClick={handleGetStarted}
  >
    Get Started
  </Button>
</MotionBox>


      {/* Authentication Modal */}
      <Footer/>


    </Box>
  );
};

export default Home;

      
