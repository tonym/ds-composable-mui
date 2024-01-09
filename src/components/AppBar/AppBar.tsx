'use client';

import { AppBar as MuiAppBar, AppBarClasses as MuiAppBarClasses, AppBarProps as MuiAppBarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface AppBarProps extends MuiAppBarProps {
  /* Add custom prop types here */
}

export type AppBarClasses = Extract<MuiAppBarClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function AppBarStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'AppBar'
  );
}

const theme: Theme = useTheme();
export const AppBarStyle: Styles = AppBarStyles(theme);

export function AppBar(props: AppBarProps) {
  const defaultProps: AppBarProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: AppBarProps = { ...defaultProps, ...props };

  return <MuiAppBar sx={AppBarStyle} {...composedProps} />;
}
