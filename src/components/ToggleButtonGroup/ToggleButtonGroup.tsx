'use client';

import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupClasses as MuiToggleButtonGroupClasses,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ToggleButtonGroupProps extends MuiToggleButtonGroupProps {
  /* Add custom prop types here */
}

export type ToggleButtonGroupClasses = Extract<
  MuiToggleButtonGroupClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ToggleButtonGroupStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ToggleButtonGroup'
  );
}

const theme: Theme = useTheme();
export const ToggleButtonGroupStyle: Styles = ToggleButtonGroupStyles(theme);

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  const defaultProps: ToggleButtonGroupProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ToggleButtonGroupProps = { ...defaultProps, ...props };

  return <MuiToggleButtonGroup sx={ToggleButtonGroupStyle} {...composedProps} />;
}
