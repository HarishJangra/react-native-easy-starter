module.exports = {
	presets: [
		"module:metro-react-native-babel-preset",
		"@babel/preset-flow",
		"@babel/preset-react"
	],
	env: {
		production: {
			plugins: ["react-native-paper/babel"]
		}
	},
	retainLines: true
};
