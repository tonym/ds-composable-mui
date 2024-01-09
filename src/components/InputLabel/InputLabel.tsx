'use client';

import {
  InputLabel as MuiInputLabel,
  InputLabelClasses as MuiInputLabelClasses,
  InputLabelProps as MuiInputLabelProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface InputLabelProps extends MuiInputLabelProps {
  /* Add custom prop types here */
}

export type InputLabelClasses = Extract<
  MuiInputLabelClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function InputLabelStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'InputLabel'
  );
}

const theme: Theme = useTheme();
export const InputLabelStyle: Styles = InputLabelStyles(theme);

export function InputLabel(props: InputLabelProps) {
  const defaultProps: InputLabelProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: InputLabelProps = { ...defaultProps, ...props };

  return <MuiInputLabel sx={InputLabelStyle} {...composedProps} />;
}
