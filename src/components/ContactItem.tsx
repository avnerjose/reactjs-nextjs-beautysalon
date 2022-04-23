import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

type ContactItemProps = {
  content: string;
  icon: IconType;
};

export function ContactItem({ content, icon: ItemIcon }: ContactItemProps) {
  return (
    <Flex align="center" gap="1rem">
      <Icon as={ItemIcon} color="primary" />
      <Text>{content}</Text>
    </Flex>
  );
}
