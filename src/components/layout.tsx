import * as React from "react";
import PropTypes from "prop-types";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";

import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
