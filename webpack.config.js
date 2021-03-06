module.exports = {
	entry: "./webpack/entry.js",
	output: {
		path: "assets/js",
		filename: "bundle.js",
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel",
				query: {
					presets: ["es2015"]
				}
			}
		]
	}
};
