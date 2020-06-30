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
      },
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackplugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ]
}