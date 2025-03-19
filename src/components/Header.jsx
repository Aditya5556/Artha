import { Box, Flex, Text, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box bg="white" px={8} py={4} boxShadow="md">
      <Flex align="center">
        <Text fontSize="2xl" fontWeight="bold">NexArtha</Text>
        <Spacer />
        <Button as={Link} to="/" variant="ghost" _hover={{ color: "blue.500" }}>Home</Button>
        <Button as={Link} to="/about" variant="ghost" _hover={{ color: "blue.500" }}>About</Button>
        <Button as={Link} to="/portfolio" variant="ghost" _hover={{ color: "blue.500" }}>Portfolio</Button>
        <Button as={Link} to="/contact" variant="ghost" _hover={{ color: "blue.500" }}>Contact</Button>
        <Button as={Link} to="/legal" variant="ghost" _hover={{ color: "blue.500" }}>Legal</Button>
      </Flex>
    </Box>
  );
}
