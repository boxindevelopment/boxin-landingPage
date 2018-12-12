const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/layout/index.js',
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    devtool: "source-map",
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        { 
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'html-loader'
        }, 
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader", options: {
                  sourceMap: true
              }
          }, {
              loader: "sass-loader", options: {
                  sourceMap: true
              }
          }]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      port: 8080
      // open: 'http://localhost:8080',
    },
    plugins: [new HtmlWebpackPlugin({
		template: './src/layout/index.html',
		filename: 'index.html',
		})
	]
}
