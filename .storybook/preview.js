// import React from "react"; // needed for context if using Styled Components
/**
 * install storybook-addon-next & "If you have global imported styles, create a file called .storybook/preview.js and import the styles there. They will be added by Storybook automatically for all stories." https://storybook.js.org/docs/react/get-started/setup#render-component-styles
 * Lies.
 */
// import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
/**
 * to provide the theme if using a context for Styled Components (do we want to use Styled COmponents?)
 */
// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme="default">
//       <Story />
//     </ThemeProvider>
//   ),
// ];