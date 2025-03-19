import { Box, Heading } from "@chakra-ui/react";
import ContactForm from "./ContactForm";  

export default function ContactPage() {
  return (
    <Box p={10}>
      <Heading mb={6}>Contact Us</Heading>
      <ContactForm />
    </Box>
  );
}
