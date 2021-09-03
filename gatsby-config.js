module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gameshop",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "",
        accessToken: "",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
