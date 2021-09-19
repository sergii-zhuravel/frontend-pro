### Пошаговая инструкция создания npm проекта со сборкой webpack


1. `npm init -y`
// don't need main field in the package.json, so it can be removed
2. `npm i -D webpack webpack-cli`
3. Create file webpack.config.js (webpack default config)

4. Basic config content
--------------------
Version 1
--------------------
```
const path = require('path');
module.exports = {
    mode: 'development', //production, default is none
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
  },
}
```
--------------------
5. add script in package.json
"build": "webpack"

6. Improved config
---------------------
```
const path = require('path');
module.exports = {
    mode: 'development', //production, default is none
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
  },
}
```
---------------------
Add html-webpack-plugin to generate HTML file with included bundles

`npm i -D html-webpack-plugin`
---------------------
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development', //production, default is none
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello from HtmlWebpackPlugin',
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
}
```
---------------------
How to work with styles
`import style from './app.css';`
---------------------
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development', //production, default is none
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
  },
  //loaders
  module: {
    rules: [
      //css
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      //images
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello from HtmlWebpackPlugin',
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
}
```
---------------------
How to configure devServer

Add new script into package.json:
"dev": "webpack serve"

Run:
`npm install -D webpack-dev-server`

Improved config with dev server
---------------------
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, 'src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5001, //default 8080
    open: true,
    hot: true,
    watchContentBase: true,
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
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Just a Demo',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html'),
    }),
  ],
};
```

To support babel install these dependencies:
`npm i -D @babel/core @babel/preset-env babel-loader`
