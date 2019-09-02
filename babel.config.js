module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // plugins: ["transform-remove-console"],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'transform-remove-console'],
    },
  },
  retainLines: true,
};
