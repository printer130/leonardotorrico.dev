const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.html'),
  output: {
    filename: 'bundle.html'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackplugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ]
}