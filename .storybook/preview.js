// import React from "react"; // needed for context if using Styled Components
/**
 * install storybook-addon-next & "If you have global imported styles, create a file called .storybook/preview.js and import the styles there. They will be added by Storybook automatically for all stories." https://storybook.js.org/docs/react/get-started/setup#render-component-styles
 * Lies.
 */
import "../src/styles/css/_normalize.css";
import "../src/styles/css/_variables.css";
import "../src/styles/globals.css";
import "!style-loader!css-loader!sass-loader!./styles.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global for components",
    defaultValue: "light-theme",
    toolbar: {
      icon: "paintbrush",
      items: ["light-theme", "dark-theme"],
    },
  },
};

const withThemeProvider = (Story, context) => {
  document.documentElement.setAttribute("data-theme", context.globals.theme);
  return <Story {...context} />;
};

export const decorators = [withThemeProvider];
