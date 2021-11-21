import * as React from "react";
import { Link as GatsbyLink, PageProps } from "gatsby";
import { Box, Text, Link, VStack, Code, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../components/Layout";
import {
  HomepageHero,
  Brands,
  Hero,
  Studies,
  SideBySide,
} from "@graydigital/storybook";

const IndexPage = (props: PageProps) => (
  <Layout>
    <HomepageHero link={{ text: "Our Services", target: "/services" }} />
    {/* TODO: Brands should be fed in from an external source. i.e. Headless CMS request */}
    <Brands />
    <Hero link={{ text: "Our Mission", target: "/company" }} />
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

export default IndexPage;
