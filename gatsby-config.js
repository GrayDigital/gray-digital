// trunk-ignore(eslint/no-undef)
// trunk-ignore(eslint/@typescript-eslint/no-var-requires)
require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: `.env`,
});

// trunk-ignore(eslint/no-undef)
module.exports = {
  siteMetadata: {
    title: `Gray Digital`,
    description: `Landing page for Gray Digital, LLC.`,
    author: `Ari Perez & Randall Weidberg & Brandon Clapp`,
    siteUrl: `https://gray.digital/`,
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ap1mxri861el`,
        accessToken: `rTwgJ6hxPN49dVUzep-yb4FeeITMe1TmVYhmnM1nIYg`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
