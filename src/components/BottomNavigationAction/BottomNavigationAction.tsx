'use client';

import {
  BottomNavigationAction as MuiBottomNavigationAction,
  BottomNavigationActionClasses as MuiBottomNavigationActionClasses,
  BottomNavigationActionProps as MuiBottomNavigationActionProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface BottomNavigationActionProps extends MuiBottomNavigationActionProps {
  /* Add custom prop types here */
}

export type BottomNavigationActionClasses = Extract<
  MuiBottomNavigationActionClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function BottomNavigationActionStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'BottomNavigationAction'
  );
}

const theme: Theme = useTheme();
export const BottomNavigationActionStyle: Styles = BottomNavigationActionStyles(theme);

export function BottomNavigationAction(props: BottomNavigationActionProps) {
  const defaultProps: BottomNavigationActionProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: BottomNavigationActionProps = { ...defaultProps, ...props };

  return <MuiBottomNavigationAction sx={BottomNavigationActionStyle} {...composedProps} />;
}
