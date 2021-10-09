import { extendTheme } from "@chakra-ui/react";

const colors = {
  colors: {
    primary: "black",
  },
};

const styles = {
  styles: {
    global: {
      "html, body": {
        bg: "black",
        color: "white",
      },
      a: {},
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export default extendTheme({ config, styles, colors });
