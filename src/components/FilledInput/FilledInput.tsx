'use client';

import {
  FilledInput as MuiFilledInput,
  FilledInputClasses as MuiFilledInputClasses,
  FilledInputProps as MuiFilledInputProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface FilledInputProps extends MuiFilledInputProps {
  /* Add custom prop types here */
}

export type FilledInputClasses = Extract<
  MuiFilledInputClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function FilledInputStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'FilledInput'
  );
}

const theme: Theme = useTheme();
export const FilledInputStyle: Styles = FilledInputStyles(theme);

export function FilledInput(props: FilledInputProps) {
  const defaultProps: FilledInputProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: FilledInputProps = { ...defaultProps, ...props };

  return <MuiFilledInput sx={FilledInputStyle} {...composedProps} />;
}
