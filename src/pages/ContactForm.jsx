import React, { useState } from "react";
import { database, ref, push, set } from "../firebase/firebaseConfig";
import { motion } from "framer-motion";
import { Button, Input, Textarea, VStack, FormControl, FormLabel, useToast } from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in required fields (Name, Email, Message)",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    try {
      const messagesRef = ref(database, "messages");
      const newMessageRef = push(messagesRef);
      await set(newMessageRef, formData);

      toast({
        title: "Success",
        description: "Your message has been sent!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Firebase Error:", error);
      toast({
        title: "Error",
        description: "Failed to submit form",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit} width="100%" maxWidth="500px" mx="auto" p={4} borderRadius="md" boxShadow="lg">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
        </FormControl>

        <FormControl>
          <FormLabel>Company</FormLabel>
          <Input name="company" value={formData.company} onChange={handleChange} placeholder="Your Company (Optional)" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
        </FormControl>

        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone (Optional)" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" />
        </FormControl>

        <Button type="submit" colorScheme="blue" isLoading={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </VStack>
    </motion.div>
  );
};

export default ContactForm;
