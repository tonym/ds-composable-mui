import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArgTypes, Canvas, Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { Accordion } from '../Accordion/Accordion';
import { AccordionActions as AccordionActionsComponent } from './AccordionActions';
import { AccordionDetails } from '../AccordionDetails';
import { AccordionSummary } from '../AccordionSummary';
import { Button } from '../Button';
import { Typography } from '../Typography';

const meta: Meta<typeof AccordionActionsComponent> = {
  component: AccordionActionsComponent,
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
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
      <AccordionActionsComponent>
        <Button>Action Secondary</Button>
        <Button variant="contained">Action Primary</Button>
      </AccordionActionsComponent>
    </Accordion>
  ),
  title: 'Components/AccordionActions'
};

export default meta;

type Story = StoryObj<typeof AccordionActionsComponent>;

export const Component: Story = {
  args: {},
  argTypes: {
    disableSpacing: { control: { type: 'boolean' } }
  },
  parameters: {
    controls: {
      include: ['disableSpacing'],
      sort: 'alpha'
    }
  }
};
