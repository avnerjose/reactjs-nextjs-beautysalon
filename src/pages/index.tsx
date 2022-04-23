import type { NextPage } from "next";
import Head from "next/head";

import { Footer, Navbar } from "../components";
import {
  AboutUsSection,
  ContactSection,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from "../components/sections";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beauty Salon | Home</title>
      </Head>
      <Navbar />
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
