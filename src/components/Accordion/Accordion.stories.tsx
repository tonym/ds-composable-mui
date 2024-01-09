import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArgTypes, Canvas, Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { Accordion as AccordionComponent } from './Accordion';
import { AccordionDetails } from '../AccordionDetails';
import { AccordionSummary } from '../AccordionSummary';
import { Typography } from '../Typography';

type AccordionStoryProps = React.ComponentProps<typeof AccordionComponent> & { details?: string; summary?: string };

const meta: Meta<AccordionStoryProps> = {
  component: AccordionComponent,
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
    <AccordionComponent {...args}>
      <AccordionSummary>
        <Typography>{args.summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{args.details}</Typography>
      </AccordionDetails>
    </AccordionComponent>
  ),
  title: 'Components/Accordion'
};

export default meta;
type Story = StoryObj<AccordionStoryProps>;

export const Component: Story = {
  args: {
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    summary: 'Accordion 1'
  },
  argTypes: {
    defaultExpanded: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    disableGutters: { control: { type: 'boolean' } },
    elevation: {
      control: {
        max: 24,
        min: 0,
        type: 'number'
      }
    },
    expanded: { control: { type: 'boolean' } },
    onChange: { table: { disable: true } },
    square: { control: { type: 'boolean' } }
  },
  parameters: {
    controls: {
      exclude: ['children', 'classes', 'className', 'component', 'sx', 'TransitionComponent', 'TransitionProps', 'style', 'ref'],
      sort: 'alpha'
    }
  }
};
