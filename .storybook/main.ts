import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    './local-preset.js',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-vitest',
    '@storybook/theming',
    '@storybook/manager-api',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}

export default config
