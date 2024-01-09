'use client';

import { InputBase as MuiInputBase, InputBaseClasses as MuiInputBaseClasses, InputBaseProps as MuiInputBaseProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface InputBaseProps extends MuiInputBaseProps {
  /* Add custom prop types here */
}

export type InputBaseClasses = Extract<
  MuiInputBaseClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function InputBaseStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'InputBase'
  );
}

const theme: Theme = useTheme();
export const InputBaseStyle: Styles = InputBaseStyles(theme);

export function InputBase(props: InputBaseProps) {
  const defaultProps: InputBaseProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: InputBaseProps = { ...defaultProps, ...props };

  return <MuiInputBase sx={InputBaseStyle} {...composedProps} />;
}
