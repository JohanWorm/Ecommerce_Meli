const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, 'client/src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "meli.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(json)$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      assets: path.resolve(__dirname, 'client/src/assets'),
      src: path.resolve(__dirname, 'client/src'),
    }
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'client/public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};