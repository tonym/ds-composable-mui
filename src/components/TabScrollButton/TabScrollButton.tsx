'use client';

import {
  TabScrollButton as MuiTabScrollButton,
  TabScrollButtonClasses as MuiTabScrollButtonClasses,
  TabScrollButtonProps as MuiTabScrollButtonProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TabScrollButtonProps extends MuiTabScrollButtonProps {
  /* Add custom prop types here */
}

export type TabScrollButtonClasses = Extract<
  MuiTabScrollButtonClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TabScrollButtonStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TabScrollButton'
  );
}

const theme: Theme = useTheme();
export const TabScrollButtonStyle: Styles = TabScrollButtonStyles(theme);

export function TabScrollButton(props: TabScrollButtonProps) {
  const defaultProps: TabScrollButtonProps = {
    direction: 'left',
    orientation: 'horizontal'
    /* Add custom prop defaults here */
  };

  const composedProps: TabScrollButtonProps = { ...defaultProps, ...props };

  return <MuiTabScrollButton sx={TabScrollButtonStyle} {...composedProps} />;
}
