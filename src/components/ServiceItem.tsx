import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion, AnimationControls } from "framer-motion";
import { child } from "../animations";

type Service = {
  title: string;
  description: string;
  image: string;
};

type ServiceItemProps = {
  service: Service;
  controls: AnimationControls;
  index: number;
};

export function ServiceItem({
  service: { title, description, image },
  controls,
  index,
}: ServiceItemProps) {
  return (
    <Box
      borderBottom="0.3rem solid"
      bg="background.1"
      borderColor="primary"
      boxShadow="lg"
      borderTopRadius="10px"
      as={motion.div}
      custom={index}
      animate={controls}
      initial="hidden"
      variants={child}
    >
      <Stack gap="1.2rem" textAlign="center" p="2.5rem">
        <Image h="80px" src={image} alt={title} />
        <Heading fontSize="1.5rem">{title}</Heading>
        <Text>{description}</Text>
      </Stack>
    </Box>
  );
}
