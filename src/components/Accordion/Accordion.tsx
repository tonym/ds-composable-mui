'use client';

import { Accordion as MuiAccordion, AccordionClasses as MuiAccordionClasses, AccordionProps as MuiAccordionProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface AccordionProps extends MuiAccordionProps {
  /* Add custom prop types here */
}

export type AccordionClasses = Extract<
  MuiAccordionClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function AccordionStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Accordion'
  );
}

const theme: Theme = useTheme();
export const AccordionStyle: Styles = AccordionStyles(theme);

export function Accordion(props: AccordionProps) {
  const defaultProps: AccordionProps = {
    children: ''
    /* Add custom prop defaults here */
  };

  const composedProps: AccordionProps = { ...defaultProps, ...props };

  return <MuiAccordion sx={AccordionStyle} {...composedProps} />;
}
