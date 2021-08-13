const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 8000,
    hot: true,
    contentBase: './dist', // build 경로의 html 을 바라보고 mapping
  },
});
