import type { NextPage } from "next";
import Head from "next/head";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { animateScroll } from "react-scroll";

import { Footer, Navbar } from "../components";
import { MobileMenu } from "../components/MobileMenu";
import {
  AboutUsSection,
  ContactSection,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from "../components/sections";
import { UpArrowIcon } from "../components/Icons";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isGoUpButtonAvailable, setIsGoUpButtonAvailable] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setIsGoUpButtonAvailable(window.scrollY >= 460)
    );

    return () =>
      window.removeEventListener("scroll", () =>
        setIsGoUpButtonAvailable(window.scrollY >= 460)
      );
  }, []);

  return (
    <>
      <Head>
        <title>Beauty Salon | Home</title>
      </Head>
      {isOpen && <MobileMenu onClose={onClose} />}
      <Navbar handleOpenMobileMenu={onOpen} />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      {isGoUpButtonAvailable && (
        <IconButton
          onClick={() => animateScroll.scrollToTop()}
          aria-label="go up"
          bg="primary"
          color="white"
          boxShadow="lg"
          position="fixed"
          bottom="1rem"
          right="1rem"
          borderRadius="50%"
          fontSize="1.3rem"
          icon={<UpArrowIcon />}
        />
      )}
      <Footer />
    </>
  );
};

export default Home;
