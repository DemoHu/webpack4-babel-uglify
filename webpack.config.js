
const path = require('path');

module.exports = {
  entry: './src/index.js',  //需要压缩的代码
  output: {
    path: path.resolve(__dirname, 'dist'), //输出目录
    filename: 'index.js'
  }
};