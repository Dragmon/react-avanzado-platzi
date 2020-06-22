const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,  //para los archivos que terminan con la extensión JS
        exclude: /node_modules/,  // excluimos los directorios de node_modules
        use: {
          loader: 'babel-loader',   // usamos el loader de Babel
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}