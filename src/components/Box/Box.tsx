'use client';

import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface BoxProps extends MuiBoxProps {
  /* Add custom prop types here */
}

export function BoxStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Box'
  );
}

const theme: Theme = useTheme();
export const BoxStyle: Styles = BoxStyles(theme);

export function Box(props: BoxProps) {
  const defaultProps: BoxProps = {
    children: ''
    /* Add custom prop defaults here */
  };

  const composedProps: BoxProps = { ...defaultProps, ...props };

  return <MuiBox sx={BoxStyle} {...composedProps} />;
}
