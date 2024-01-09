'use client';

import {
  ButtonBase as MuiButtonBase,
  ButtonBaseClasses as MuiButtonBaseClasses,
  ButtonBaseProps as MuiButtonBaseProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ButtonBaseProps extends MuiButtonBaseProps {
  /* Add custom prop types here */
}

export type ButtonBaseClasses = Extract<
  MuiButtonBaseClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ButtonBaseStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ButtonBase'
  );
}

const theme: Theme = useTheme();
export const ButtonBaseStyle: Styles = ButtonBaseStyles(theme);

export function ButtonBase(props: ButtonBaseProps) {
  const defaultProps: ButtonBaseProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ButtonBaseProps = { ...defaultProps, ...props };

  return <MuiButtonBase sx={ButtonBaseStyle} {...composedProps} />;
}
