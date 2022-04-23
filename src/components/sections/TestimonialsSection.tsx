import { Flex, Heading } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { Slider } from "../Slider";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { TestimonialItem } from "../TestimonialItem";
import { testimonials } from "../../mocks";
import { slideFromBottom } from "../../animations";

export function TestimonialsSection() {
  const { ref, controls, inView } = useInViewAnimation();
  return (
    <Flex
      id="testimonials"
      ref={ref}
      minH="100vh"
      w="100%"
      justify="center"
      bg="background.2"
    >
      <Flex
        minH="100%"
        maxW="container.lg"
        flexDir="column"
        align="center"
        justify="center"
        p={["1rem", "1rem", "1rem", "0 "]}
      >
        {inView && (
          <>
            <Heading
              maxW="500px"
              as={motion.h2}
              animate={controls}
              initial="hidden"
              variants={slideFromBottom}
              textAlign="center"
              mb="2rem"
            >
              Depoimentos de quem já passou por aqui
            </Heading>
            <Slider>
              {testimonials.map((item) => (
                <SwiperSlide key={item.author}>
                  <TestimonialItem testimonial={item} />
                </SwiperSlide>
              ))}
            </Slider>
          </>
        )}
      </Flex>
    </Flex>
  );
}
