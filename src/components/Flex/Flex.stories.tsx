import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { defaultFlexProps, Flex as FlexComponent } from './Flex';

const meta: Meta<typeof FlexComponent> = {
  component: FlexComponent,
  parameters: {
    docs: {
      page: () => <Markdown>{Readme.toString()}</Markdown>
    }
  },
  title: 'Components/Flex'
};

export default meta;
type Story = StoryObj<typeof FlexComponent>;

export const Details: Story = {
  args: {
    ...defaultFlexProps,
    children: (
      <>
        <div>box 1</div>
        <div>box 2</div>
        <div>box 3</div>
      </>
    )
  }
};
