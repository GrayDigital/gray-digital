import * as React from "react";
import { Link as GatsbyLink, PageProps } from "gatsby";
import { Box, Text, Link, VStack, Code, Grid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const Company = (props: PageProps) => (
  <Layout>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <h1>Company</h1>
        </VStack>
      </Grid>
    </Box>
  </Layout>
);

export default Company;
