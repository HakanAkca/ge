module.exports = {
  siteMetadata: {
    siteUrl: "https://www.gourmentevents.tld",
    title: "GourmetEvents",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-recaptcha",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: '/assets/' // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          appId: "<YOUR_FIREBASE_APP_ID>",
          apiKey: "AIzaSyASlAHOLbA1XkhdPpj3X9b1JJuqeT519_0",
          authDomain: "caviar-1ba18.firebaseapp.com",
          projectId: "caviar-1ba18",
          storageBucket: "caviar-1ba18.appspot.com",
          messagingSenderId: "337025320058",
          appId: "1:337025320058:web:270c8d3f392cba949027c3",
          measurementId: "G-3FBM6G7FQ7"
        }
      }
    }
  ],
};
