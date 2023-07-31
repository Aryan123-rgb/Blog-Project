import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Great Vibes', cursive",
  },
  colors: {
    primary: "#6f6af8",
    "primary-light": "hsl(242, 91%, 69%, 18%)",
    "primary-variant": "#5854c7",
    red: "#da0f3f",
    "red-light": "hsl(346, 87%, 46%, 15%)",
    green: "#00c476",
    "green-light": "hsl(156, 100%, 38%, 15%)",
    "gray-900": "#1e1e66",
    "gray-700": "#2d2b7c",
    "gray-300": "rgba(242, 242, 254, 0.3)",
    "gray-200": "rgba(242, 242, 254, 0.7)",
    white: "#f2f2fe",
    bg: "#0f0f3e",
  },
  transition: "all 300ms ease",
  containerWidthLg: "74%",
  containerWidthMd: "88%",
  formWidth: "40%",
  radii: {
    card1: "0.3rem",
    card2: "0.5rem",
    card3: "0.8rem",
    card4: "2rem",
    card5: "5rem",
  },
});

export default theme;
