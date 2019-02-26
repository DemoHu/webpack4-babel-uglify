const path = require('path');

module.exports = {
  entry: {
    app: [
      "babel-polyfill", 
      "./src/bundle-7daa9f5fa7.js" //需要压缩的js，目前只支持单个文件一个一个压缩 = =！
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //输出目录
    filename: 'bundle-7daa9f5fa7.js' //输出文件名称，建议与源文件同名
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