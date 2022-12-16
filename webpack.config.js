const webpack = require("webpack");
const path = require("path");
const html = require("html-webpack-plugin");
const css = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./Frontend/app.js",
  output: {
    path: path.join(__dirname, "/Backend/public"),
    filename: "js/bundle.js",
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? "style-loader" : css.loader, // Si estoy en desarrollo carga los estilos de css en javascript, si estoy en produccion carga los estilos en un archivo separado de csss
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new html({
      template: "./Frontend/index.html",
    }),

    new css({
      filename: "css/cssMini.css",
    }),
  ],
};

