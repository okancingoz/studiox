import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Montserrat, sans-serif",
  body: "Montserrat, sans-serif",
  mono: "Montserrat, monospace",
};

const colors = {
  green: {
    50: "#e6f9ed",
    100: "#c2f2d6",
    200: "#99eabb",
    300: "#6fe29f",
    400: "#46db84",
    500: "#1dd369",
    600: "#17a854",
    700: "#127e3f",
    800: "#0c542a",
    900: "#062a15",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts,
  colors,
});

export default theme;
