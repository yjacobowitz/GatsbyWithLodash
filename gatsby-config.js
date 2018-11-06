module.exports = {
  plugins: [
    `gatsby-plugin-lodash`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93349937-2`
      }
    },
    `gatsby-plugin-offline`
  ]
};
