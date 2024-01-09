'use client';

import {
  CircularProgress as MuiCircularProgress,
  CircularProgressClasses as MuiCircularProgressClasses,
  CircularProgressProps as MuiCircularProgressProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface CircularProgressProps extends MuiCircularProgressProps {
  /* Add custom prop types here */
}

export type CircularProgressClasses = Extract<
  MuiCircularProgressClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function CircularProgressStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'CircularProgress'
  );
}

const theme: Theme = useTheme();
export const CircularProgressStyle: Styles = CircularProgressStyles(theme);

export function CircularProgress(props: CircularProgressProps) {
  const defaultProps: CircularProgressProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: CircularProgressProps = { ...defaultProps, ...props };

  return <MuiCircularProgress sx={CircularProgressStyle} {...composedProps} />;
}
