'use client';

import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupClasses as MuiButtonGroupClasses,
  ButtonGroupProps as MuiButtonGroupProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ButtonGroupProps extends MuiButtonGroupProps {
  /* Add custom prop types here */
}

export type ButtonGroupClasses = Extract<
  MuiButtonGroupClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ButtonGroupStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ButtonGroup'
  );
}

const theme: Theme = useTheme();
export const ButtonGroupStyle: Styles = ButtonGroupStyles(theme);

export function ButtonGroup(props: ButtonGroupProps) {
  const defaultProps: ButtonGroupProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ButtonGroupProps = { ...defaultProps, ...props };

  return <MuiButtonGroup sx={ButtonGroupStyle} {...composedProps} />;
}
