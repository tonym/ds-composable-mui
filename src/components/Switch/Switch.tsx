'use client';

import { Switch as MuiSwitch, SwitchClasses as MuiSwitchClasses, SwitchProps as MuiSwitchProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface SwitchProps extends MuiSwitchProps {
  /* Add custom prop types here */
}

export type SwitchClasses = Extract<MuiSwitchClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function SwitchStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Switch'
  );
}

const theme: Theme = useTheme();
export const SwitchStyle: Styles = SwitchStyles(theme);

export function Switch(props: SwitchProps) {
  const defaultProps: SwitchProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: SwitchProps = { ...defaultProps, ...props };

  return <MuiSwitch sx={SwitchStyle} {...composedProps} />;
}
