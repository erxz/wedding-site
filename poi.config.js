const path = require("path");
const pkg = require("./package");
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  entry: ["src/polyfills.js", "src/index.js"],
  html: {
    title: pkg.productName,
    description: pkg.description,
    site: pkg.productSite,
    template: path.join(__dirname, "index.ejs")
  },
  plugins: [
    require("@poi/plugin-bundle-report")(),
    require("@poi/plugin-offline")({
      pwa: "./src/pwa.js", // Path to pwa runtime entry
      pluginOptions: {} // Additional options for offline-plugin
    })
    //require("./src/imagemin")
  ],
  configureWebpack(config) {
    // Google fonts
    config.plugins.push(new GoogleFontsPlugin({
      fonts: [{
          family: 'Playfair Display SC',
          variants: ['700']
        },
        {
          family: 'Playfair Display',
          variants: ['700', '400i', '400']
        }
      ]
    }));

    return config;
  }
};
