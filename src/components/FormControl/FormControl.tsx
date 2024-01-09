'use client';

import {
  FormControl as MuiFormControl,
  FormControlClasses as MuiFormControlClasses,
  FormControlProps as MuiFormControlProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface FormControlProps extends MuiFormControlProps {
  /* Add custom prop types here */
}

export type FormControlClasses = Extract<
  MuiFormControlClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function FormControlStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'FormControl'
  );
}

const theme: Theme = useTheme();
export const FormControlStyle: Styles = FormControlStyles(theme);

export function FormControl(props: FormControlProps) {
  const defaultProps: FormControlProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: FormControlProps = { ...defaultProps, ...props };

  return <MuiFormControl sx={FormControlStyle} {...composedProps} />;
}
