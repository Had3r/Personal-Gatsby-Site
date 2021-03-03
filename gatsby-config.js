module.exports = {
  siteMetadata: {
    siteTitleAlt: `Adrian Zawadzki - Frontend Developer`,
  },
  plugins: [
    `@lekoarts/gatsby-theme-cara`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adrian Frontend Dev Portfolio`,
        short_name: `AZ Portfolio`,
        description: `Portfolio with a description of my person, skills, projects and interests`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ].filter(Boolean),
}
