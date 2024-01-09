'use client';

import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextClasses as MuiFormHelperTextClasses,
  FormHelperTextProps as MuiFormHelperTextProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface FormHelperTextProps extends MuiFormHelperTextProps {
  /* Add custom prop types here */
}

export type FormHelperTextClasses = Extract<
  MuiFormHelperTextClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function FormHelperTextStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'FormHelperText'
  );
}

const theme: Theme = useTheme();
export const FormHelperTextStyle: Styles = FormHelperTextStyles(theme);

export function FormHelperText(props: FormHelperTextProps) {
  const defaultProps: FormHelperTextProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: FormHelperTextProps = { ...defaultProps, ...props };

  return <MuiFormHelperText sx={FormHelperTextStyle} {...composedProps} />;
}
