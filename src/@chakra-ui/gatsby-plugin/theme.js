// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react";
const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        bg: "black",
        color: "white",
      },
      a: {},
    },
  },
  colors: {
    primary: "black",
  },
};

export default extendTheme(theme);
