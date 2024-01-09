'use client';

import { Popover as MuiPopover, PopoverClasses as MuiPopoverClasses, PopoverProps as MuiPopoverProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface PopoverProps extends MuiPopoverProps {
  /* Add custom prop types here */
}

export type PopoverClasses = Extract<
  MuiPopoverClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function PopoverStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Popover'
  );
}

const theme: Theme = useTheme();
export const PopoverStyle: Styles = PopoverStyles(theme);

export function Popover(props: PopoverProps) {
  const defaultProps: PopoverProps = {
    open: false
    /* Add custom prop defaults here */
  };

  const composedProps: PopoverProps = { ...defaultProps, ...props };

  return <MuiPopover sx={PopoverStyle} {...composedProps} />;
}
