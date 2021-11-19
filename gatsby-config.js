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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
