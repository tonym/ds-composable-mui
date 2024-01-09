'use client';

import {
  SnackbarContent as MuiSnackbarContent,
  SnackbarContentClasses as MuiSnackbarContentClasses,
  SnackbarContentProps as MuiSnackbarContentProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface SnackbarContentProps extends MuiSnackbarContentProps {
  /* Add custom prop types here */
}

export type SnackbarContentClasses = Extract<
  MuiSnackbarContentClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function SnackbarContentStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'SnackbarContent'
  );
}

const theme: Theme = useTheme();
export const SnackbarContentStyle: Styles = SnackbarContentStyles(theme);

export function SnackbarContent(props: SnackbarContentProps) {
  const defaultProps: SnackbarContentProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: SnackbarContentProps = { ...defaultProps, ...props };

  return <MuiSnackbarContent sx={SnackbarContentStyle} {...composedProps} />;
}
