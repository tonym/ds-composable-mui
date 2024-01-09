'use client';

import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentClasses as MuiInputAdornmentClasses,
  InputAdornmentProps as MuiInputAdornmentProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface InputAdornmentProps extends MuiInputAdornmentProps {
  /* Add custom prop types here */
}

export type InputAdornmentClasses = Extract<
  MuiInputAdornmentClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function InputAdornmentStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'InputAdornment'
  );
}

const theme: Theme = useTheme();
export const InputAdornmentStyle: Styles = InputAdornmentStyles(theme);

export function InputAdornment(props: InputAdornmentProps) {
  const defaultProps: InputAdornmentProps = {
    position: 'end'
    /* Add custom prop defaults here */
  };

  const composedProps: InputAdornmentProps = { ...defaultProps, ...props };

  return <MuiInputAdornment sx={InputAdornmentStyle} {...composedProps} />;
}
