const metaConfig = require('./gatsby-meta-config')

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
        path: `${__dirname}/content/assets`,
        name: `assets`,
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
        shortname: `passwd10`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: 'gatsby-remark-emojis',
          options: {
            active : true,
            class  : 'emoji-icon',
            escapeCharacter : '#', // (default: '')
            size   : 64,
            styles : {
              display      : 'inline',
              margin       : '0',
              'margin-top' : '1px',
              position     : 'relative',
              top          : '5px',
              width        : '25px'
            }
          }
        }]
      }
    },
  `gatsby-plugin-sass`,
  `gatsby-transformer-remark`,
  `gatsby-plugin-lodash`,
  ]
}
