'use client';

import {
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputClasses as MuiOutlinedInputClasses,
  OutlinedInputProps as MuiOutlinedInputProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface OutlinedInputProps extends MuiOutlinedInputProps {
  /* Add custom prop types here */
}

export type OutlinedInputClasses = Extract<
  MuiOutlinedInputClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function OutlinedInputStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'OutlinedInput'
  );
}

const theme: Theme = useTheme();
export const OutlinedInputStyle: Styles = OutlinedInputStyles(theme);

export function OutlinedInput(props: OutlinedInputProps) {
  const defaultProps: OutlinedInputProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: OutlinedInputProps = { ...defaultProps, ...props };

  return <MuiOutlinedInput sx={OutlinedInputStyle} {...composedProps} />;
}
