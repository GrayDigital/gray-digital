import * as React from "react";
import PropTypes from "prop-types";

import { Header } from "@graydigital/storybook";
import logo from "../images/gray_digital_logo_white.png";


export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header
        LogoImage={() => (
          <img width={107} height={30} src={logo} alt="gray logo" />
        )}
        Link={() => <a href="/careers">Join Us</a>}
        asLogoLink={null}
      />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
