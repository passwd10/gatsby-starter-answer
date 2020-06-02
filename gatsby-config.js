const metaConfig = require("./gatsby-meta-config")

module.exports = {
  siteMetadata: metaConfig,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/content/post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/content/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/plan`,
        name: `plan`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `Your Disqus-short-name here`, // Modify this to your disqus-short-name
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: "%",
              showLineNumbers: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              margin: 36,
              scrollOffset: 0,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: metaConfig.title,
              short_name: metaConfig.title,
              start_url: `/`,
              background_color: `#ffffff`,
              theme_color: "#6b37bf",
              display: "standalone",
              icon: metaConfig.icon,
            },
          },
          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: metaConfig.ga,
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-emojis`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-lodash`,
    "gatsby-plugin-offline",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
