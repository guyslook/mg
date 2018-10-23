module.exports = {
  siteMetadata: {
    title: "Gatsby + Netlify CMS Starter"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "basicpage",
        path: `${__dirname}/src/pages/basicpage`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    // {
    //   resolve: "gatsby-plugin-collections",
    //   options: {
    //     collections: [
    //       {
    //         name: "basicpage",
    //         folder: "src/pages/basicpage",
    //         permalink: "/:title",
    //         template: "basicpage"
    //       }
    //     ]
    //   }
    // },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
