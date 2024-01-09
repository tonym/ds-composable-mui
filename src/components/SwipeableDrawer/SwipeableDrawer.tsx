'use client';

import {
  SwipeableDrawer as MuiSwipeableDrawer,
  DrawerClasses as MuiDrawerClasses,
  SwipeableDrawerProps as MuiSwipeableDrawerProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface SwipeableDrawerProps extends MuiSwipeableDrawerProps {
  /* Add custom prop types here */
}

export type SwipeableDrawerClasses = Extract<
  MuiDrawerClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function SwipeableDrawerStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'SwipeableDrawer'
  );
}

const theme: Theme = useTheme();
export const SwipeableDrawerStyle: Styles = SwipeableDrawerStyles(theme);

export function SwipeableDrawer(props: SwipeableDrawerProps) {
  const defaultProps: SwipeableDrawerProps = {
    onClose: () => {},
    onOpen: () => {}
    /* Add custom prop defaults here */
  };

  const composedProps: SwipeableDrawerProps = { ...defaultProps, ...props };

  return <MuiSwipeableDrawer sx={SwipeableDrawerStyle} {...composedProps} />;
}
