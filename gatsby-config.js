
module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Recipes :)',
    contactInfo:'www.facebook.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typo`,
      },
    },
  ],
}
