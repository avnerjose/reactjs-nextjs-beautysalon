import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useDisclosure } from "@chakra-ui/react";

import { Footer, Navbar } from "../components";
import { MobileMenu } from "../components/MobileMenu";
import {
  AboutUsSection,
  ContactSection,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from "../components/sections";

const Home: NextPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
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
      <Footer />
    </>
  );
};

export default Home;
