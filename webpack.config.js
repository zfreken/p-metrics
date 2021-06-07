const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: ['babel-polyfill','./src/js/index.js'],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename : 'js/perfanalytics.min.js'
    
  },
  devServer: {
    contentBase:'./dist'
  },
  plugins: [
    new HtmlWebpackPlugin({

    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}