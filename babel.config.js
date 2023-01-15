module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          animations: './src/animations',
          components: './src/components',
          //   config: './src/config',
          context: './src/context',
          helpers: './src/helpers',
          hooks: './src/hooks',
          modals: './src/modals',
          navigation: './src/navigation',
          patches: './src/patches',
          //   services: './src/services',
          theme: './src/theme',
          types: './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
