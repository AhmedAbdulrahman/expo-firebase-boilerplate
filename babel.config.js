module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './components',
            '@containers': './containers',
            '@screens': './screens',
            '@theme': './theme',
            '@constants': './constants',
            '@navigation': './navigation',
            '@theme': './theme',
            '@assets': './assets',
            '@i18n': './i18n',
            '@hooks': './hooks',
            '@storage': './storage',
          },
        },
      ],
    ],
  };
};
