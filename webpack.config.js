const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "./example/src/app.js"),
  output: {
    path: resolve(__dirname, "example/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './example/src/index.html'),
      // filename: "./index.html"
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  devServer: {
    port: 3001
  }
};
