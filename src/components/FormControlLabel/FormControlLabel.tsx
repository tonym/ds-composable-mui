'use client';

import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelClasses as MuiFormControlLabelClasses,
  FormControlLabelProps as MuiFormControlLabelProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface FormControlLabelProps extends MuiFormControlLabelProps {
  /* Add custom prop types here */
}

export type FormControlLabelClasses = Extract<
  MuiFormControlLabelClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function FormControlLabelStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'FormControlLabel'
  );
}

const theme: Theme = useTheme();
export const FormControlLabelStyle: Styles = FormControlLabelStyles(theme);

export function FormControlLabel(props: FormControlLabelProps) {
  const defaultProps: FormControlLabelProps = {
    control: <div />,
    label: ''
    /* Add custom prop defaults here */
  };

  const composedProps: FormControlLabelProps = { ...defaultProps, ...props };

  return <MuiFormControlLabel sx={FormControlLabelStyle} {...composedProps} />;
}
