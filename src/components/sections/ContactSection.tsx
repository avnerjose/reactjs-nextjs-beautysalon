import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ContactItem } from "../ContactItem";
import { contactItems } from "../../mocks";
import { WhatsappIcon } from "../Icons";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { slideFromLeft, slideFromRight } from "../../animations";

export function ContactSection() {
  const { ref, controls, inView } = useInViewAnimation();
  return (
    <Flex
      id="contact"
      ref={ref}
      minH="100vh"
      bg="background.1"
      w="100%"
      justify="center"
    >
      <Flex
        minH="100%"
        w="100%"
        maxW="container.lg"
        px={["1rem", "1rem", "1rem", "0 "]}
      >
        {inView && (
          <SimpleGrid
            columns={[1, 1, 2]}
            w="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              gap="0.8rem"
              maxW={["90%", "90%", "400px"]}
              alignItems="flex-start"
              as={motion.div}
              animate={controls}
              initial="hidden"
              custom={true}
              variants={slideFromLeft}
            >
              <Heading>Entre em contato com a gente!</Heading>
              <Text>
                Entre em contato com a Beautysalon,
                <br />
                queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
              </Text>
              <Button
                px="2rem"
                bg="primary"
                color="white"
                leftIcon={<WhatsappIcon />}
              >
                Entre em contato
              </Button>
            </Stack>

            <Stack
              gap="2rem"
              alignItems={["flex-start", "flex-start", "flex-end"]}
              as={motion.div}
              animate={controls}
              initial="hidden"
              variants={slideFromRight}
            >
              {contactItems.map((item) => (
                <ContactItem
                  content={item.content}
                  icon={item.icon}
                  key={item.content}
                />
              ))}
            </Stack>
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}
