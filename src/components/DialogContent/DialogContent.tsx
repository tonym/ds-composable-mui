'use client';

import {
  DialogContent as MuiDialogContent,
  DialogContentClasses as MuiDialogContentClasses,
  DialogContentProps as MuiDialogContentProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface DialogContentProps extends MuiDialogContentProps {
  /* Add custom prop types here */
}

export type DialogContentClasses = Extract<
  MuiDialogContentClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function DialogContentStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'DialogContent'
  );
}

const theme: Theme = useTheme();
export const DialogContentStyle: Styles = DialogContentStyles(theme);

export function DialogContent(props: DialogContentProps) {
  const defaultProps: DialogContentProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: DialogContentProps = { ...defaultProps, ...props };

  return <MuiDialogContent sx={DialogContentStyle} {...composedProps} />;
}
