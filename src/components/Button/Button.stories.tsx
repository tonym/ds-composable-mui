import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { Button as ButtonComponent } from './Button';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  parameters: {
    docs: {
      page: () => <Markdown>{Readme.toString()}</Markdown>
    }
  },
  title: 'Components/Button'
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Details: Story = {
  args: {
    children: 'Button',
    variant: 'contained'
  }
};
