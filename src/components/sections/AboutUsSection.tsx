import {
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "../../animations";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export function AboutUsSection() {
  const { ref, controls, inView } = useInViewAnimation();

  return (
    <Flex
      id="about"
      ref={ref}
      minH="100vh"
      w="100%"
      justify="center"
      bg="background.2"
    >
      <Flex minH="100%" maxW="container.lg" p={["1rem", "1rem", "1rem", "0 "]}>
        {inView && (
          <SimpleGrid alignItems="center" gap="1rem" columns={[1, 1, 2]}>
            <GridItem
              as={motion.div}
              initial="hidden"
              variants={slideFromLeft}
              animate={controls}
              custom={false}
              d="flex"
              justifyContent="flex-start"
              p={["1rem", "1rem", "0"]}
            >
              <Image
                maxH="400px"
                maxW={["100%", "100%", "450px"]}
                src="/about.png"
                alt="Image of women in the saloon"
              />
            </GridItem>

            <Stack
              gap="0.8rem"
              maxW={["90%", "90%", "400px"]}
              alignItems="flex-start"
              as={motion.div}
              initial="hidden"
              variants={slideFromRight}
              animate={controls}
              custom={true}
            >
              <Heading>Sobre nós</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                dolor optio praesentium similique. Ullam fuga nesciunt quod
                velit, hic suscipit corrupti adipisci, vel sed ipsum nisi,
                eligendi accusantium eius aperiam?
              </Text>
              <Text>
                Nemo error animi eaque adipisci illo, vero temporibus, rerum
                molestias sequi cumque quae sed obcaecati est corrupti illum
                expedita minima neque fugiat! Vitae accusantium magnam ex
                exercitationem deleniti. Tenetur, laudantium?
              </Text>
              <Text>
                Possimus dolore voluptatem excepturi deserunt molestiae? Non
                esse tempora ad ratione quae nostrum autem quis reprehenderit
                dolorem, magnam assumenda repellat minus exercitationem ut ipsam
                ea nisi veniam mollitia praesentium nulla.
              </Text>
            </Stack>
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}
