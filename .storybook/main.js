const path = require("path");

module.exports = {
  stories: [
    "../src/components/*.stories.mdx",
    "../src/components/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    },
  },
  core: {},
  docs: {
    docsPage: "automatic",
  },
};
