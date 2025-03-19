import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box 
      as={motion.div}
      bg="black" 
      color="white" 
      minH="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      textAlign="center" 
      flexDir="column"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <Heading fontSize="5xl">About NexArtha</Heading>
      <Text maxW="600px" mt={4} fontSize="lg">
        Diversified, personalized investment strategies tailored for you. 
        AI-driven insights to optimize your wealth.
      </Text>
    </Box>
  );
};

export default AboutSection;
