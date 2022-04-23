import { Flex, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./Icons";

export function Footer() {
  return (
    <Flex as="footer" w="100%" justify="center" bg="primary">
      <Flex
        minH="100%"
        w="100%"
        maxW="container.lg"
        flexDir={["column", "column", "row"]}
        align={["space-between", "space-between", "center"]}
        justify="space-between"
        py="60px"
        px={["1rem", "1rem", "1rem", "0"]}
      >
        <Stack>
          <Image src="/logo_white.svg" alt="Beauty Salon" maxW="250px" />
          <Text color="white">@{new Date().getFullYear()} BeautySalon</Text>
          <Text color="white">Todos os direitos reservados.</Text>
        </Stack>
        <HStack color="white" mt={["2rem", "2rem", "0"]} fontSize="1.2rem">
          <Icon as={InstagramIcon} />
          <Icon as={FacebookIcon} />
          <Icon as={YoutubeIcon} />
        </HStack>
      </Flex>
    </Flex>
  );
}
