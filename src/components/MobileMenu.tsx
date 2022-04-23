import { Box, Flex, Icon, IconButton, Stack } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { links } from "../mocks";
import { CloseIcon } from "./Icons";

type MobileMenuProps = {
  onClose: () => void;
};

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <Flex
      pos="fixed"
      bg="background.1"
      zIndex="12"
      inset="0 0 0 0"
      align="center"
      justify="center"
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        icon={<CloseIcon />}
        pos="absolute"
        top="1rem"
        right="1rem"
        fontSize="2rem"
        color="primary"
        background="transparent"
      />
      <Stack alignItems="center">
        {links.map(({ title, to }) => (
          <Link
            className="link"
            activeClass="active-link"
            onClick={onClose}
            to={to}
            key={title}
            offset={-50}
            smooth
            duration={500}
            spy={true}
          >
            <Box
              cursor="pointer"
              px="1rem"
              py="0.5rem"
              color="dark"
              fontSize="1.9rem"
              fontWeight="bold"
            >
              {title}
            </Box>
          </Link>
        ))}
      </Stack>
    </Flex>
  );
}
