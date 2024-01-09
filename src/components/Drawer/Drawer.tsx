'use client';

import { Drawer as MuiDrawer, DrawerClasses as MuiDrawerClasses, DrawerProps as MuiDrawerProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface DrawerProps extends MuiDrawerProps {
  /* Add custom prop types here */
}

export type DrawerClasses = Extract<MuiDrawerClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function DrawerStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Drawer'
  );
}

const theme: Theme = useTheme();
export const DrawerStyle: Styles = DrawerStyles(theme);

export function Drawer(props: DrawerProps) {
  const defaultProps: DrawerProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: DrawerProps = { ...defaultProps, ...props };

  return <MuiDrawer sx={DrawerStyle} {...composedProps} />;
}
