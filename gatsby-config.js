const { useGatsbyConfig } = require("gatsby-plugin-ts-config");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = useGatsbyConfig(() => ({
  siteMetadata: {
    title: `Gray Digital`,
    description: `Landing page for Gray Digital, LLC.`,
    author: `Ari Perez & Randall Weidberg`,
    siteUrl: `https://gray.digitla/`,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gray-digital`,
        short_name: `gray-digital`,
        start_url: `/`,
        background_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/gray_digital_logo_white.png`, // This path is relative to the root of the site.
      },
    },
  ],
}));
