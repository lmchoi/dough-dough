module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@recipes': './src/assets/recipes',
          '@components': './src/components',
          '@helpers': './src/helpers',
        },
      },
    ]
  ]
};
