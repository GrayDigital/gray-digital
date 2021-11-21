require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: `.env`,
});

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
        /**
         * @property {boolean} [resetCSS=true]
         * if `false`, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ap1mxri861el`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
