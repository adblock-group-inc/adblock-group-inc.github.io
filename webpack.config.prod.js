const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html' }),
    new HtmlWebpackPlugin({ template: './products.html', filename: 'products.html', inject: false }),
    new HtmlWebpackPlugin({ template: './contact.html', filename: 'contact.html', inject: false }),
    new HtmlWebpackPlugin({ template: './checkout.html', filename: 'checkout.html', inject: false }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' },
        { from: 'css', to: 'css' },
        { from: 'js/vendor', to: 'js/vendor' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'favicon.svg', to: 'favicon.svg' },
        { from: 'favicon-16x16.png', to: 'favicon-16x16.png' },
        { from: 'favicon-32x32.png', to: 'favicon-32x32.png' },
        { from: 'favicon-48x48.png', to: 'favicon-48x48.png' },
        { from: 'android-chrome-192x192.png', to: 'android-chrome-192x192.png' },
        { from: 'android-chrome-512x512.png', to: 'android-chrome-512x512.png' },
        { from: 'apple-touch-icon.png', to: 'apple-touch-icon.png' },
        { from: 'apple-touch-icon-152x152.png', to: 'apple-touch-icon-152x152.png' },
        { from: 'apple-touch-icon-167x167.png', to: 'apple-touch-icon-167x167.png' },
        { from: 'apple-touch-icon-180x180.png', to: 'apple-touch-icon-180x180.png' },
        { from: 'safari-pinned-tab.svg', to: 'safari-pinned-tab.svg' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
