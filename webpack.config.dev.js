const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	
	entry: {
    index: [
      path.resolve(__dirname, 'resources', 'styles', 'app.scss'),
    ]
	},

	output: {
    path: path.resolve(__dirname, 'public'),
  },

	target: 'electron-renderer',

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}
