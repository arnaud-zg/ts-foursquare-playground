module.exports = {
  addons: [
    '@storybook/preset-typescript',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
          localIdentName: '[name]__[local]--[hash:base64:5]',
        },
      },
    },
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
  ],
  stories: ['../stories/**/*.stories.[tj]sx'],
}
