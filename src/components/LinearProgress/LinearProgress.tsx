'use client';

import {
  LinearProgress as MuiLinearProgress,
  LinearProgressClasses as MuiLinearProgressClasses,
  LinearProgressProps as MuiLinearProgressProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface LinearProgressProps extends MuiLinearProgressProps {
  /* Add custom prop types here */
}

export type LinearProgressClasses = Extract<
  MuiLinearProgressClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function LinearProgressStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'LinearProgress'
  );
}

const theme: Theme = useTheme();
export const LinearProgressStyle: Styles = LinearProgressStyles(theme);

export function LinearProgress(props: LinearProgressProps) {
  const defaultProps: LinearProgressProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: LinearProgressProps = { ...defaultProps, ...props };

  return <MuiLinearProgress sx={LinearProgressStyle} {...composedProps} />;
}
