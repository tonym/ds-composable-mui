'use client';

import { Popper as MuiPopper, PopperProps as MuiPopperProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface PopperProps extends MuiPopperProps {
  /* Add custom prop types here */
}

export function PopperStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Popper'
  );
}

const theme: Theme = useTheme();
export const PopperStyle: Styles = PopperStyles(theme);

export function Popper(props: PopperProps) {
  const defaultProps: PopperProps = {
    open: false
    /* Add custom prop defaults here */
  };

  const composedProps: PopperProps = { ...defaultProps, ...props };

  return <MuiPopper sx={PopperStyle} {...composedProps} />;
}
