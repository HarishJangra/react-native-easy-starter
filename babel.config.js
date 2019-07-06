module.exports = {
  presets: ["module:metro-react-native-babel-preset", "@babel/preset-react"],
  // plugins: ["transform-remove-console"],
  env: {
    production: {
      plugins: ["react-native-paper/babel"]
    }
  },
  retainLines: true
};
