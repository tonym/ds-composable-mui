'use client';

import { Snackbar as MuiSnackbar, SnackbarClasses as MuiSnackbarClasses, SnackbarProps as MuiSnackbarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface SnackbarProps extends MuiSnackbarProps {
  /* Add custom prop types here */
}

export type SnackbarClasses = Extract<
  MuiSnackbarClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function SnackbarStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Snackbar'
  );
}

const theme: Theme = useTheme();
export const SnackbarStyle: Styles = SnackbarStyles(theme);

export function Snackbar(props: SnackbarProps) {
  const defaultProps: SnackbarProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: SnackbarProps = { ...defaultProps, ...props };

  return <MuiSnackbar sx={SnackbarStyle} {...composedProps} />;
}
