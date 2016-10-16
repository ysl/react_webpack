// 這邊使用 HtmlWebpackPlugin，將 bundle 好得 <script> 插入到 body  
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './app/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        },
      },
    ],
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 8088,
  },
  plugins: [HTMLWebpackPluginConfig],
};
