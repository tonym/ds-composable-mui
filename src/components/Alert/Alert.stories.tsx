import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArgTypes, Canvas, Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { Alert as AlertComponent } from './Alert';

const meta: Meta<typeof AlertComponent> = {
  component: AlertComponent,
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
  render: args => <AlertComponent {...args}>This is an alert</AlertComponent>,
  title: 'Components/Alert'
};

export default meta;
type Story = StoryObj<typeof AlertComponent>;

export const Component: Story = {
  args: {},
  argTypes: {
    closeText: {
      control: {
        type: 'text'
      }
    },
    elevation: {
      control: {
        max: 24,
        min: 0,
        type: 'number'
      }
    },
    onClose: { table: { disable: true } },
    role: { control: { type: 'text' } },
    square: { control: { type: 'boolean' } }
  },
  parameters: {
    controls: {
      exclude: [
        'action',
        'children',
        'classes',
        'className',
        'component',
        'components',
        'componentsProps',
        'icon',
        'iconMapping',
        'ref',
        'slotProps',
        'slots',
        'style',
        'sx'
      ],
      sort: 'alpha'
    }
  }
};
