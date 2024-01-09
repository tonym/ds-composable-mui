'use client';

import {
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsClasses as MuiAccordionDetailsClasses,
  AccordionDetailsProps as MuiAccordionDetailsProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface AccordionDetailsProps extends MuiAccordionDetailsProps {
  /* Add custom prop types here */
}

export type AccordionDetailsClasses = Extract<
  MuiAccordionDetailsClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function AccordionDetailsStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'AccordionDetails'
  );
}

const theme: Theme = useTheme();
export const AccordionDetailsStyle: Styles = AccordionDetailsStyles(theme);

export function AccordionDetails(props: AccordionDetailsProps) {
  const defaultProps: AccordionDetailsProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: AccordionDetailsProps = { ...defaultProps, ...props };

  return <MuiAccordionDetails sx={AccordionDetailsStyle} {...composedProps} />;
}
