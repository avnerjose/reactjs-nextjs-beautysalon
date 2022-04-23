import { Avatar, Flex, Stack, Text, chakra } from "@chakra-ui/react";

type Testimonial = {
  author: string;
  content: string;
};

type TestimonialItemProps = {
  testimonial: Testimonial;
};

export function TestimonialItem({
  testimonial: { author, content },
}: TestimonialItemProps) {
  return (
    <Stack minH="300px" p="52px" w="95%" gap="1.2rem" boxShadow="md">
      <chakra.span fontSize="52px" color="primary" lineHeight="0">
        &ldquo;
      <chakra.span fontSize="1rem" color="dark" lineHeight="26px">
        {content}
      </chakra.span>
      </chakra.span>
      <Flex align="center" gap="1rem">
        <Avatar name={author} />
        <Text>{author}</Text>
      </Flex>
    </Stack>
  );
}
