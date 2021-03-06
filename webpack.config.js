var webpack = require('webpack');
var CommonsChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
var ProvidePluginConfig = new webpack.ProvidePlugin({
  jQuery: 'jquery',
  $: 'jquery',
  jquery: 'jquery'
});

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractTextPluginConfig = new ExtractTextPlugin("[name].css");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body'
});

// To hide the warning.
var DefinePluginConfig = new webpack.DefinePlugin({
  "process.env": {
     NODE_ENV: JSON.stringify("production")
  }
});

module.exports = {
  entry: {
    app: `${__dirname}/app/app.jsx`,
    vendors: ['bootstrap', 'c3', 'jquery', 'lodash', 'moment', 'q', 'react', 'react-bootstrap', 'react-dom', 'react-router']
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 8088
  },
  plugins: [
    CommonsChunkPluginConfig,
    ProvidePluginConfig,
    ExtractTextPluginConfig,
    HTMLWebpackPluginConfig,
    DefinePluginConfig
  ]
};
