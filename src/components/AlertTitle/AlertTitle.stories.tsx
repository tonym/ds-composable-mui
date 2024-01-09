import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArgTypes, Canvas, Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { Alert } from '../Alert';
import { AlertTitle as AlertTitleComponent, AlertTitleProps } from './AlertTitle';

const meta: Meta<typeof AlertTitleComponent> = {
  component: AlertTitleComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Markdown>{Readme.toString()}</Markdown>
          <Markdown>## Props</Markdown>
          <ArgTypes sort="alpha" />
          <Markdown>## Example</Markdown>
          <Canvas of={Component} sourceState="shown" />
        </>
      )
    }
  },
  render: args => (
    <Alert onClose={() => {}}>
      <AlertTitleComponent {...args}>This is an alert</AlertTitleComponent>
      This is an Alert component with an AlertTitle
    </Alert>
  ),
  title: 'Components/AlertTitle'
};

export default meta;
type Story = StoryObj<typeof AlertTitleComponent>;

export const Component: Story = {
  args: {},
  argTypes: {},
  parameters: {
    controls: {
      include: [],
      sort: 'alpha'
    }
  }
};
