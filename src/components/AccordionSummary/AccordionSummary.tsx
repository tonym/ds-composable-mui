'use client';

import {
  AccordionSummary as MuiAccordionSummary,
  AccordionClasses as MuiAccordionClasses,
  AccordionSummaryProps as MuiAccordionSummaryProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface AccordionSummaryProps extends MuiAccordionSummaryProps {
  /* Add custom prop types here */
}

export type AccordionSummaryClasses = Extract<
  MuiAccordionClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function AccordionSummaryStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'AccordionSummary'
  );
}

const theme: Theme = useTheme();
export const AccordionSummaryStyle: Styles = AccordionSummaryStyles(theme);

export function AccordionSummary(props: AccordionSummaryProps) {
  const defaultProps: AccordionSummaryProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: AccordionSummaryProps = { ...defaultProps, ...props };

  return <MuiAccordionSummary sx={AccordionSummaryStyle} {...composedProps} />;
}
