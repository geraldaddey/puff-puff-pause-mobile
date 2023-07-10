module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
    'nativewind/babel',
    'react-native-reanimated/plugin',
  ],
};
