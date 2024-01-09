'use client';

import { TextField as MuiTextField, TextFieldClasses as MuiTextFieldClasses, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export type TextFieldProps = MuiTextFieldProps & {
  /* Add custom prop types here */
};

export type TextFieldClasses = Extract<
  MuiTextFieldClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TextFieldStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TextField'
  );
}

const theme: Theme = useTheme();
export const TextFieldStyle: Styles = TextFieldStyles(theme);

export function TextField(props: TextFieldProps) {
  const defaultProps: TextFieldProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TextFieldProps = { ...defaultProps, ...props };

  return <MuiTextField sx={TextFieldStyle} {...composedProps} />;
}
