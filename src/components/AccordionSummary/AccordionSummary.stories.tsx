import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArgTypes, Canvas, Markdown } from '@storybook/addon-docs';
import Readme from './readme.md';
import { Accordion } from '../Accordion';
import { AccordionDetails } from '../AccordionDetails';
import { AccordionSummary as AccordionSummaryComponent } from '.';
import { Typography } from '../Typography';

const meta: Meta<typeof AccordionSummaryComponent> = {
  component: AccordionSummaryComponent,
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
      <AccordionSummaryComponent>
        <Typography>Accordion 1</Typography>
      </AccordionSummaryComponent>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  ),
  title: 'Components/AccordionSummary'
};

export default meta;
type Story = StoryObj<typeof AccordionSummaryComponent>;

export const Component: Story = {
  args: {},
  parameters: {
    controls: {
      exclude: [
        'action',
        'children',
        'classes',
        'component',
        'LinkComponent',
        'onFocusVisible',
        'ref',
        'style',
        'sx',
        'TouchRippleProps',
        'touchRippleRef'
      ],
      sort: 'alpha'
    }
  }
};
