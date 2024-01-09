'use client';

import {
  ToggleButton as MuiToggleButton,
  ToggleButtonClasses as MuiToggleButtonClasses,
  ToggleButtonProps as MuiToggleButtonProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ToggleButtonProps extends MuiToggleButtonProps {
  /* Add custom prop types here */
}

export type ToggleButtonClasses = Extract<
  MuiToggleButtonClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ToggleButtonStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ToggleButton'
  );
}

const theme: Theme = useTheme();
export const ToggleButtonStyle: Styles = ToggleButtonStyles(theme);

export function ToggleButton(props: ToggleButtonProps) {
  const defaultProps: ToggleButtonProps = {
    value: 'ToggleButton'
    /* Add custom prop defaults here */
  };

  const composedProps: ToggleButtonProps = { ...defaultProps, ...props };

  return <MuiToggleButton sx={ToggleButtonStyle} {...composedProps} />;
}
