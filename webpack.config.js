const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './packages/react-particle-line/index.jsx',
  output: {
    filename: 'react-particle-line.js',
    path: resolve(__dirname, './dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'react-particle-line',
  },
  node: false,
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: 'style-loader!css-loader'
    },],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
};