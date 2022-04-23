import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../themes/theme";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
