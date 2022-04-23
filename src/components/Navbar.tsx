import { Box, Flex, HStack, IconButton, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { links } from "../mocks";
import { MenuIcon } from "./Icons";

type NavbarProps = {
  handleOpenMobileMenu: () => void;
};

export function Navbar({ handleOpenMobileMenu }: NavbarProps) {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(false);

  const handleNavbarScrollColor = () => {
    const calc =
      (Math.abs(window.scrollY - window.innerHeight) + 70) / window.innerHeight;
    setIsNavbarTransparent(Math.round(calc) % 2 === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScrollColor);
    return () => window.removeEventListener("scroll", handleNavbarScrollColor);
  }, []);

  return (
    <Flex
      as="header"
      bg={isNavbarTransparent ? "background.2" : "background.1"}
      justify="center"
      position="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="10"
    >
      <Flex
        as="nav"
        minH="100%"
        w="100%"
        maxW="container.lg"
        px={["1rem", "1rem", "1rem", "0"]}

        align="center"
        justify="space-between"
      >
        <Image src="/logo_green.svg" alt="Beauty Salon" w="160px" h="20px" />
        <HStack display={["none", "none", "flex"]}>
          {links.map(({ title, to }) => (
            <Link
              activeClass="active-link"
              className="link"
              to={to}
              key={title}
              offset={-50}
              smooth
              duration={500}
              spy={true}
            >
              <Box cursor="pointer" px="1rem" py="1.2rem" color="dark">
                {title}
              </Box>
            </Link>
          ))}
        </HStack>
        <IconButton
          display={["flex", "flex", "none"]}
          aria-label="menu"
          onClick={handleOpenMobileMenu}
          icon={<MenuIcon />}
          background="transparent"
          color="primary"
          fontSize="1.5rem"
        />
      </Flex>
    </Flex>
  );
}
