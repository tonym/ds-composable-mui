import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArgTypes, Canvas, Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { FlexChild } from '../FlexChild';
import { Toolbar } from '../Toolbar';
import { Typography } from '../Typography';
import { AppBar as AppBarComponent } from './AppBar';

const meta: Meta<typeof AppBarComponent> = {
  component: AppBarComponent,
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
    <AppBarComponent {...args}>
      <Toolbar>
        <FlexChild flexGrow={1}>
          <Flex justifyContent="space-between">
            <Typography variant="h6" component="div">
              AppBar
            </Typography>
            <Button color="inherit">Login</Button>
          </Flex>
        </FlexChild>
      </Toolbar>
    </AppBarComponent>
  ),
  title: 'Components/AppBar'
};

export default meta;
type Story = StoryObj<typeof AppBarComponent>;

export const Component: Story = {
  args: {
    position: 'static'
  },
  argTypes: {},
  parameters: {
    controls: {
      exclude: ['children', 'classes', 'className', 'component', 'ref', 'style', 'sx'],
      sort: 'alpha'
    }
  }
};
