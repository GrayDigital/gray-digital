import * as React from "react";
import PropTypes from "prop-types";

import { Header } from "@graydigital/storybook";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header
        LogoImage={() => <img width={107} height={30} alt="gray logo" />}
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
