import { ReactNode } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper";

type SliderProps = {
  children: ReactNode;
};

export function Slider({ children }: SliderProps) {
  const pages = useBreakpointValue({ base: 1, md: 2 });
  return (
    <Swiper
      autoplay={{ delay: 1000 }}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={pages}
      style={{
        width: "100%",
        minHeight: "350px",
        maxWidth: "87vw",
      }}
    >
      {children}
    </Swiper>
  );
}
