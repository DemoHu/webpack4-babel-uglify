const path = require('path');

module.exports = {
  entry: './src/bundle-7daa9f5fa7.js', 
  entry: {
    app: [
      "babel-polyfill", 
      "./src/bundle-7daa9f5fa7.js"
    ],//需要压缩的代码
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //输出目录
    filename: 'bundle-7daa9f5fa7.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader"
      }
    }]
  }
};