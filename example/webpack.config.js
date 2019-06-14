const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "./src/app.js"),
  output: {
    path: resolve(__dirname, "./dist"),
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
      template: resolve(__dirname, './src/index.html'),
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
