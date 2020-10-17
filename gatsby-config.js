require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Asnieres Volley 92`,
    description: `Le portail du club de volleyball AV92`,
    author: `Alexandre Zajac`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nova Flat`,
          `Viga`,
          `Ruda:500,700,900`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      // The name of the plugin
      resolve: 'gatsby-source-mongodb',
      options: {
        // Name of the database and collection where are books reside
        dbName: 'AV92',
        collection: ['matchups', 'teams'],
        connectionString:
          'mongodb+srv://av92_user:KgUE1VKv6Z7u2eKO@av92cluster.lzmdm.mongodb.net',
        extraParams: {
          ssl: true,
          authSource: 'admin',
          retryWrites: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
