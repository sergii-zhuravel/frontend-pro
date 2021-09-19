const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", //production, default is none
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5001, //default 8080
    open: true,
    hot: true
  },
  //loaders
  module: {
    rules: [
      //css
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      //images
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
      //js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello from HtmlWebpackPlugin",
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
