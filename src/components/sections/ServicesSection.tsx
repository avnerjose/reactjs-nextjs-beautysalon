import {
  Flex,
  Heading,
  Stack,
  SimpleGridProps,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { parent, slideFromTop } from "../../animations";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { ServiceItem } from "../ServiceItem";
import { services } from "../../mocks";

const MotionSimpleGrid = motion<SimpleGridProps>(SimpleGrid);

export function ServicesSection() {
  const { ref, controls, inView } = useInViewAnimation();
  return (
    <Flex
      id="services"
      ref={ref}
      minH="100vh"
      w="100%"
      justify="center"
      bg="background.1"
    >
      <Flex
        minH="100%"
        maxW="container.lg"
        flexDir="column"
        align="center"
        justify="center"
        p={["1rem", "1rem", "1rem", "0 "]}
      >
        {inView && (
          <>
            <Stack
              textAlign={["left", "left", "center"]}
              maxW={["100%", "100%", "500px"]}
              mb="2rem"
              as={motion.div}
              animate={controls}
              initial="hidden"
              variants={slideFromTop}
            >
              <Heading>Serviços</Heading>
              <chakra.span color="dark">
                Com mais de 10 anos no mercado,
                <chakra.span fontWeight="bold" color="primary">
                  {" "}
                  Beautysalon{" "}
                </chakra.span>
                o já conquistou clientes de inúmeros países com seus tratamentos
                exclusivos e totalmente naturais
              </chakra.span>
            </Stack>
            <MotionSimpleGrid
              columns={[1, 2, 3]}
              gap="1rem"
              animate={controls}
              initial="hidden"
              variants={parent}
            >
              {services.map((item, index) => (
                <ServiceItem
                  key={item.title}
                  index={index}
                  service={item}
                  controls={controls}
                />
              ))}
            </MotionSimpleGrid>
          </>
        )}
      </Flex>
    </Flex>
  );
}
