module.exports = {
  "stories": [
    '../packages/**/*.stories.js'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "webpackFinal": async (config) => {
    // remove default css rule from storybook
    config.module.rules = config.module.rules.filter((f) => f.test.toString() !== '/\\.css$/');

    // push our custom easy one
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            // Key config
            modules: true,
          },
        },
      ],
    });

    // Return the altered config
    return config;
  },
}