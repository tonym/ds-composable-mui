import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArgTypes, Canvas, Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { Accordion } from '../Accordion';
import { AccordionDetails as AccordionDetailsComponent } from '.';
import { AccordionSummary } from '../AccordionSummary';
import { Typography } from '../Typography';

const meta: Meta<typeof AccordionDetailsComponent> = {
  component: AccordionDetailsComponent,
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
  render: ({ ...args }) => (
    <Accordion>
      <AccordionSummary>
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetailsComponent>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetailsComponent>
    </Accordion>
  ),
  title: 'Components/AccordionDetails'
};

export default meta;
type Story = StoryObj<typeof AccordionDetailsComponent>;

export const Component: Story = {
  args: {},
  parameters: {
    controls: { include: [] }
  }
};
