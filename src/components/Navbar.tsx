import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";


const links = [
  {
    title: "Início",
    to: "hero",
  },
  {
    title: "Sobre",
    to: "about",
  },
  {
    title: "Serviços",
    to: "services",
  },
  {
    title: "Depoimentos",
    to: "testimonials",
  },
  {
    title: "Contato",
    to: "contact",
  },
];

export function Navbar() {
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
      h="3rem"
      position="fixed"
      inset="0 0 0 0"
      zIndex="10"
    >
      <Flex
        as="nav"
        minH="100%"
        w="100%"
        maxW="container.lg"
        px={["1rem", "1rem", "1rem", "0"]}
        p="1.5rem"
        align="center"
        justify="space-between"
      >
        <Image src="/logo_green.svg" alt="Beauty Salon" w="160px" h="20px" />
        <HStack>
          {links.map(({ title, to }) => (
            <Link
              activeClass="active-link"
              to={to}
              key={title}
              offset={-50}
              smooth
              duration={500}
              spy={true}
            >
              <Box cursor="pointer" px="1rem" py="0.5rem" color="dark">
                {title}
              </Box>
            </Link>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}
