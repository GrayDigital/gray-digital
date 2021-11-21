import * as React from "react";
import { Link as GatsbyLink, PageProps } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Layout } from "../components/Layout";
import { HomepageHero, Brands, Hero } from "@graydigital/storybook";

const IndexPage = (props: PageProps) => {
  const data = useStaticQuery(graphql`
    {
      contentfulLandingPageHero(
        contentful_id: { eq: "1WqXe4AOqePnuFXlxsOZvB" }
      ) {
        contentful_id
        subtitle {
          subtitle
        }
        title {
          title
        }
        image {
          gatsbyImageData
        }
      }
    }
  `);

  const image = getImage(data.contentfulLandingPageHero.image);

  return (
    <Layout>
      <HomepageHero
        Image={() => (
          <GatsbyImage image={image} alt={"[ToDo: add alt logo from CMS"} />
        )}
        title={data.contentfulLandingPageHero.title.title}
        subtitle={data.contentfulLandingPageHero.subtitle.subtitle}
        link={{ text: "Our Services", target: "/services" }}
      />
      {/* TODO: Brands should be fed in from an external source. i.e. Headless CMS request */}
      <Brands />
      <Hero link={{ text: "Our Mission", target: "/company" }} />
    </Layout>
  );
};

export default IndexPage;
