import { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Select,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const MotionBox = motion(Box);

export default function Portfolio() {
  const [amount, setAmount] = useState(10000);
  const [riskLevel, setRiskLevel] = useState("medium");
  const [timePeriod, setTimePeriod] = useState("1year");
  
  const containerRef = useRef(null);
  
  useEffect(() => {
    gsap.from(containerRef.current.children, {
      // opacity: 0,
      // y: 50,
      // stagger: 0.2,
      // duration: 0.8
    });
  }, []);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Container maxW="container.lg" py={10} ref={containerRef}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading size="xl" mb={8} textAlign="center" color="blue.500">
          Build Your Investment Portfolio
        </Heading>

        <VStack spacing={8} align="stretch">
          {/* Amount Section */}
          <Box p={6} borderRadius="xl" bg={bgColor} boxShadow="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading size="md" mb={4} color="blue.500">
              Investment Amount
            </Heading>
            <NumberInput
              min={1000}
              max={1000000}
              value={amount}
              onChange={(value) => setAmount(value)}
              size="lg"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>

          {/* Risk Level Section */}
          <Box p={6} borderRadius="xl" bg={bgColor} boxShadow="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading size="md" mb={4} color="green.500">
              Risk Appetite
            </Heading>
            <RadioGroup value={riskLevel} onChange={setRiskLevel}>
              <HStack spacing={8}>
                <Radio value="conservative" colorScheme="green">
                  Conservative
                </Radio>
                <Radio value="medium" colorScheme="yellow">
                  Medium
                </Radio>
                <Radio value="high" colorScheme="red">
                  High
                </Radio>
              </HStack>
            </RadioGroup>
          </Box>

          {/* Time Period Section */}
          <Box p={6} borderRadius="xl" bg={bgColor} boxShadow="lg" borderWidth="1px" borderColor={borderColor}>
            <Heading size="md" mb={4} color="purple.500">
              Investment Duration
            </Heading>
            <Select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              size="lg"
            >
              <option value="6months">6 Months</option>
              <option value="1year">1 Year</option>
              <option value="3years">3 Years</option>
              <option value="5years">5 Years</option>
            </Select>
          </Box>

          <Button
            size="lg"
            bg="blue.500"
            color="white"
            _hover={{ bg: "blue.600" }}
            onClick={() => console.log("Generate portfolio")}
            w="full"
            mt={4}
          >
            Generate Portfolio
          </Button>
        </VStack>
      </MotionBox>
    </Container>
  );
}
