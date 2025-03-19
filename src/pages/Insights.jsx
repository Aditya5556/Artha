import { Text, VStack, Container, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Insights() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.from(ref.current, { opacity: 0, y: 50, duration: 0});
  }, []);
  return (
    <Container ref={ref} maxW="container.lg" py={10}>
      <Heading size="xl" mb={6}>Mutual Fund Insights</Heading>
      <Text fontSize="lg">Explore different mutual fund categories and their risk levels.</Text>
      <VStack align="start" spacing={4} mt={4}>
        <Text fontSize="md">Equity Funds - High risk, high reward investments.</Text>
        <Text fontSize="md">Debt Funds - Stable returns with lower risk.</Text>
        <Text fontSize="md">Hybrid Funds - Balanced mix of equity and debt.</Text>
        <Text fontSize="md">Index Funds - Passive investing with market performance.</Text>
      </VStack>
    </Container>
  );
}
