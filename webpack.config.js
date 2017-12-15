module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
	},
    module: {
		rules: [
		{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					cacheDirectory: true,
					presets: ['react']
				}
			},
		{
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'file-loader',
				options: {}
				}]
		},
		{
			test: /\.css$/,
			loader: 'style-loader'
		},
		{
			test: /\.css$/,
			loader: 'css-loader',
			query: {
				modules: true,
				localIdentName: '[name]__[local]___[hash:base64:5]'
			}
		}
		],
	}
  }
}