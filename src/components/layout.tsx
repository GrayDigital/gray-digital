import * as React from "react";
import PropTypes from "prop-types";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";

import Header from "./Header";
import theme from "../@chakra-ui/theme";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ChakraProvider theme={theme} resetCSS={true}>
        <ColorModeScript />
        <Header />
        <main>{children}</main>
      </ChakraProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
