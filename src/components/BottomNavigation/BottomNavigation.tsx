'use client';

import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationClasses as MuiBottomNavigationClasses,
  BottomNavigationProps as MuiBottomNavigationProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface BottomNavigationProps extends MuiBottomNavigationProps {
  /* Add custom prop types here */
}

export type BottomNavigationClasses = Extract<
  MuiBottomNavigationClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function BottomNavigationStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'BottomNavigation'
  );
}

const theme: Theme = useTheme();
export const BottomNavigationStyle: Styles = BottomNavigationStyles(theme);

export function BottomNavigation(props: BottomNavigationProps) {
  const defaultProps: BottomNavigationProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: BottomNavigationProps = { ...defaultProps, ...props };

  return <MuiBottomNavigation sx={BottomNavigationStyle} {...composedProps} />;
}
