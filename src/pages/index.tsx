import * as React from "react";
import { Link, PageProps } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import {
  SideBySide,
  Studies,
  HomepageHero,
  Brands,
  Mission,
} from "@graydigital/storybook";

const IndexPage = (props: PageProps) => {
  const data = useStaticQuery(graphql`
    {
      contentfulLandingPageHero(
        contentful_id: { eq: "1WqXe4AOqePnuFXlxsOZvB" }
      ) {
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
      contentfulBrands(contentful_id: { eq: "0ziBhkVyT4DbToTlNQ2Ng" }) {
        title
        images {
          gatsbyImageData(
            width: 400
          )
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <HomepageHero
        Image={() => (
          <GatsbyImage
            image={getImage(data.contentfulLandingPageHero.image)}
            alt={"[ToDo: add alt logo from CMS"}
          />
        )}
        title={data.contentfulLandingPageHero.title.title}
        subtitle={data.contentfulLandingPageHero.subtitle.subtitle}
        Link={() => <Link to="/services">Our Services</Link>}
      />

      <Brands
        title={data.contentfulBrands.title}
        Logos={data.contentfulBrands.images.map((image) => {
          return (
            () => (<GatsbyImage image={getImage(image)} alt={image.description} />)
          );
        })}
      />
      <Mission link={{ text: "Our Mission", target: "/company" }} />
      <Studies
        link={{
          text: "Explore Case Study",
          target: "/work/department-of-homeland-security-assessment-generator",
        }}
      />
      <SideBySide
        title="We're solving big problems"
        content="Our technologists have developed products to improve veterans'
      access to disability benefits, built sensor networks that saved
      lives in war-torn Syria, and launched secure and equitable
      services for U.S. Citizenship and Immigration Services. At Gray,
      we partner with government agencies to take on big problems and
      deliver digital services that are purposeful, trustworthy, and
      meet the needs of millions of Americans."
        link={{ text: "View Our Work", target: "/work" }}
        imageUrl="/static/american_flag.jpeg"
        contentOn="right"
      ></SideBySide>
      <Box py="8" bg="#f5f5f4">
        <SideBySide
          title="A people-first company"
          content="Our people are our priority. We take care of the people, the products,
        and the profits in that order. From offering a self-care allowance to encouraging
        work-life balance, investing in our peoples' well-being, growth, and development
        leads to innovative human-centered solutions to the toughest technical challenges."
          link={{ text: "Join Our Team", target: "/careers" }}
          imageUrl="/static/storm_troopers.jpeg"
          contentOn="left"
        ></SideBySide>
      </Box>
    </Layout>
  );
};

export default IndexPage;
