import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { slideFromLeft, slideFromRight } from "../../animations";

export function HeroSection() {
  const { ref, controls, inView } = useInViewAnimation();
  return (
    <Flex
      id="hero"
      ref={ref}
      minH="100vh"
      bg="background.1"
      w="100%"
      justify="center"
    >
      <Flex minH="100%" maxW="container.lg" px={["1rem", "1rem", "1rem", "0 "]}>
        {inView && (
          <Grid
            alignItems="center"
            gridTemplateAreas={{
              md: `'a b'`,
              sm: `'b' 'a'`,
              base: `'b' 'a'`,
            }}
          >
            <GridItem
              gridArea="a"
              as={motion.div}
              animate={controls}
              initial="hidden"
              variants={slideFromLeft}
            >
              <Stack
                gap="0.8rem"
                maxW={["90%", "90%", "400px"]}
                alignItems={["center", "center", "flex-start"]}
                textAlign={["center", "center", "left"]}
              >
                <Heading>Saúde natural para os seus cabelos</Heading>
                <Text>
                  Um salão exclusivo em São Paulo,
                  <br />
                  especializado em tratamentos naturais.
                </Text>
                <Button px="2rem" bg="primary" color="white">
                  Agendar horário
                </Button>
              </Stack>
            </GridItem>
            <GridItem
              gridArea="b"
              p={["1rem", "1rem", "0"]}
              as={motion.div}
              animate={controls}
              initial="hidden"
              variants={slideFromRight}
              custom={true}
            >
              <Image
                maxH="400px"
                src="/hero.png"
                alt="Image of women in the saloon"
              />
            </GridItem>
          </Grid>
        )}
      </Flex>
    </Flex>
  );
}
