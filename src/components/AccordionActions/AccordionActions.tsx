'use client';

import {
  AccordionActions as MuiAccordionActions,
  AccordionActionsClasses as MuiAccordionActionsClasses,
  AccordionActionsProps as MuiAccordionActionsProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface AccordionActionsProps extends MuiAccordionActionsProps {}

export type AccordionActionsClasses = Extract<
  MuiAccordionActionsClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function AccordionActionsStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'AccordionActions'
  );
}

const theme: Theme = useTheme();
export const AccordionActionsStyle: Styles = AccordionActionsStyles(theme);

export function AccordionActions(props: AccordionActionsProps) {
  const defaultProps: AccordionActionsProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: AccordionActionsProps = { ...defaultProps, ...props };

  return <MuiAccordionActions sx={AccordionActionsStyle} {...composedProps} />;
}
