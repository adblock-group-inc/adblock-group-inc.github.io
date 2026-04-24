const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html", filename: "index.html" }),
    new HtmlWebpackPlugin({
      template: "./products.html",
      filename: "products.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: "./contact.html",
      filename: "contact.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: "./checkout.html",
      filename: "checkout.html",
      inject: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: "public", to: "public" },
        { from: "products", to: "products" },
        { from: "css", to: "css" },
        { from: "js/vendor", to: "js/vendor" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "android-chrome-192x192.png", to: "android-chrome-192x192.png", },
        { from: "android-chrome-512x512.png", to: "android-chrome-512x512.png", },
        { from: "apple-touch-icon.png", to: "apple-touch-icon.png" },
        { from: "favicon-16x16.png", to: "favicon-16x16.png" },
        { from: "favicon-32x32.png", to: "favicon-32x32.png" },
        { from: "robots.txt", to: "robots.txt" },
        { from: "kitchen-sink.html", to: "kitchen-sink.html"},
        { from: "404.html", to: "404.html" },
        { from: "site.webmanifest", to: "site.webmanifest" },
      ],
    }),
  ],
});
