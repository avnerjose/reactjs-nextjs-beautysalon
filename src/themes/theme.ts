import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#69B99D",
    secondary: "#CCF4E6",
    dark: "#0F241D",
    gray: {
      dark: "#767676",
      light: "#E4E4E4",
    },
    background: {
      1: "#F9F9F9",
      2: "#FFFFFF",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "bold",
        color: "dark",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.dark",
      },
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "DM Sans, sans-serif",
  },
});

export { theme };
