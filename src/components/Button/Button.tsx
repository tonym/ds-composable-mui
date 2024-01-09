'use client';

import { Button as MuiButton, ButtonClasses as MuiButtonClasses, ButtonProps as MuiButtonProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ButtonProps extends MuiButtonProps {
  /* Add custom prop types here */
}

export type ButtonClasses = Extract<MuiButtonClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function ButtonStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Button'
  );
}

const theme: Theme = useTheme();
export const ButtonStyle: Styles = ButtonStyles(theme);

export function Button(props: ButtonProps) {
  const defaultProps: ButtonProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ButtonProps = { ...defaultProps, ...props };

  return <MuiButton sx={ButtonStyle} {...composedProps} />;
}
