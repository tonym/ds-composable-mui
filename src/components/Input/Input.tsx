'use client';

import { Input as MuiInput, InputClasses as MuiInputClasses, InputProps as MuiInputProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface InputProps extends MuiInputProps {
  /* Add custom prop types here */
}

export type InputClasses = Extract<MuiInputClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function InputStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Input'
  );
}

const theme: Theme = useTheme();
export const InputStyle: Styles = InputStyles(theme);

export function Input(props: InputProps) {
  const defaultProps: InputProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: InputProps = { ...defaultProps, ...props };

  return <MuiInput sx={InputStyle} {...composedProps} />;
}
