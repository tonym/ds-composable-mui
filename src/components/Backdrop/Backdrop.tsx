'use client';

import { Backdrop as MuiBackdrop, BackdropClasses as MuiBackdropClasses, BackdropProps as MuiBackdropProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface BackdropProps extends MuiBackdropProps {
  /* Add custom prop types here */
}

export type BackdropClasses = Extract<
  MuiBackdropClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function BackdropStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Backdrop'
  );
}

const theme: Theme = useTheme();
export const BackdropStyle: Styles = BackdropStyles(theme);

export function Backdrop(props: BackdropProps) {
  const defaultProps: BackdropProps = {
    open: false
    /* Add custom prop defaults here */
  };

  const composedProps: BackdropProps = { ...defaultProps, ...props };

  return <MuiBackdrop sx={BackdropStyle} {...composedProps} />;
}
