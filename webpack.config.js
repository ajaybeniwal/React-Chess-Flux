var webpack = require('webpack');
module.exports = {
  entry: [
 'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  './app.jsx'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  output: {
    path: __dirname,
    filename: 'main.js'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader!babel-loader' }
    ]
  }
};