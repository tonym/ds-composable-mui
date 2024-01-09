import { StorybookConfig } from '@storybook/react-webpack5';
import remarkGfm from 'remark-gfm';
const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    },
    '@storybook/addon-designs',
    '@storybook/addon-links',
    '@storybook/addon-storysource'
  ],
  core: {
    disableTelemetry: true
  },
  docs: {
    autodocs: true,
    defaultName: 'API'
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => {
        return prop.parent ? /@mui/.test(prop.parent.fileName) || !/node_modules/.test(prop.parent.fileName) : true;
      }
    }
  }
};

export default config;
