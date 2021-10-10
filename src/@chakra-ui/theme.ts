import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
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
});
