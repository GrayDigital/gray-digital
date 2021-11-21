import * as React from "react";
import { Header } from "@graydigital/storybook";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      contentfulHeaderMenu(
        title: {}
        contentful_id: { eq: "HAtlPdiuqVPAag5Rg8bOs" }
      ) {
        title
        logoAlt
        logo {
          gatsbyImageData(width: 107, height: 30)
        }
      }
    }
  `);

  const image = getImage(data.contentfulHeaderMenu.logo);

  return (
    <>
      <Header
        LogoImage={() => (
          <GatsbyImage image={image} alt={data.contentfulHeaderMenu.logoAlt} />
        )}
        Link={() => <a href="/careers">Join Us</a>}
        asLogoLink={null}
      />
      <main>{children}</main>
    </>
  );
};
