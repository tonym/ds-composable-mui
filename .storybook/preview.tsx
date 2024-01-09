import React from 'react';
import { Preview } from '@storybook/react';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '../src';

const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Overview', 'Components', 'Core']
      }
    }
  }
};

export default preview;
