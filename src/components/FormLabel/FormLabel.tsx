'use client';

import { FormLabel as MuiFormLabel, FormLabelClasses as MuiFormLabelClasses, FormLabelProps as MuiFormLabelProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface FormLabelProps extends MuiFormLabelProps {
  /* Add custom prop types here */
}

export type FormLabelClasses = Extract<
  MuiFormLabelClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function FormLabelStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'FormLabel'
  );
}

const theme: Theme = useTheme();
export const FormLabelStyle: Styles = FormLabelStyles(theme);

export function FormLabel(props: FormLabelProps) {
  const defaultProps: FormLabelProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: FormLabelProps = { ...defaultProps, ...props };

  return <MuiFormLabel sx={FormLabelStyle} {...composedProps} />;
}
