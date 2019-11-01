const path = require('path');
const htmlWebpack = require('html-webpack-plugin');
const htmlWebpackPlugin = new htmlWebpack({
  template: path.join(__dirname, 'examples/index.html'),
  filename: './index.html'
});

module.exports = {
  entry: path.join(__dirname, 'examples/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3001
  }
};
