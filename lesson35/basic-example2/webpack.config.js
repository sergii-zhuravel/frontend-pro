const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './app-ts.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: 'ts-loader'
          }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
      ]
}