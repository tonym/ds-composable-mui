import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { defaultFlexChildProps, FlexChild as FlexChildComponent } from './FlexChild';

const meta: Meta<typeof FlexChildComponent> = {
  component: FlexChildComponent,
  parameters: {
    docs: {
      page: () => <Markdown>{Readme.toString()}</Markdown>
    }
  },
  title: 'Components/FlexChild'
};

export default meta;
type Story = StoryObj<typeof FlexChildComponent>;

export const Details: Story = {
  args: {
    ...defaultFlexChildProps,
    children: 'FlexChild'
  }
};
