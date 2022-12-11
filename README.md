# Nvisia Nextjs Based Design System

## Development Requirements

- Node v16 or higher
- Installation of the Nextjs CLI [found here](https://nextjs.org/docs/api-reference/cli)
- Installation of the Style Dictionary CLI [found here](https://amzn.github.io/style-dictionary/#/using_the_cli)

## Getting Started

Upon first cloning, you will need to install the node dependencies with `npm install`

Run the `npm run dev` command to build and run a local instance of the Next application locally.

This is will:

- Generate design tokens based from the tokens folder found within styles
- Build the Next application

## Storybook

Alongside the development of the next application, is an instance of Storybook which is used to help create and test react components in an isolated environment, independent of rest of the application logic.

To run the storybook, run the `storybook` command to build and run the storybook locally.

As this was built upon the latest prereleased version of Storybook intended for Nextjs 12/13 integration, the implementation may require additional configuration and you may encounter visual bugs.
