'use client';

import { FormGroup as MuiFormGroup, FormGroupClasses as MuiFormGroupClasses, FormGroupProps as MuiFormGroupProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface FormGroupProps extends MuiFormGroupProps {
  /* Add custom prop types here */
}

export type FormGroupClasses = Extract<
  MuiFormGroupClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function FormGroupStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'FormGroup'
  );
}

const theme: Theme = useTheme();
export const FormGroupStyle: Styles = FormGroupStyles(theme);

export function FormGroup(props: FormGroupProps) {
  const defaultProps: FormGroupProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: FormGroupProps = { ...defaultProps, ...props };

  return <MuiFormGroup sx={FormGroupStyle} {...composedProps} />;
}
