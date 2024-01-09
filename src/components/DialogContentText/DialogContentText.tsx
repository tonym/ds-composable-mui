'use client';

import {
  DialogContentText as MuiDialogContentText,
  DialogContentTextClasses as MuiDialogContentTextClasses,
  DialogContentTextProps as MuiDialogContentTextProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface DialogContentTextProps extends MuiDialogContentTextProps {
  /* Add custom prop types here */
}

export type DialogContentTextClasses = Extract<
  MuiDialogContentTextClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function DialogContentTextStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'DialogContentText'
  );
}

const theme: Theme = useTheme();
export const DialogContentTextStyle: Styles = DialogContentTextStyles(theme);

export function DialogContentText(props: DialogContentTextProps) {
  const defaultProps: DialogContentTextProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: DialogContentTextProps = { ...defaultProps, ...props };

  return <MuiDialogContentText sx={DialogContentTextStyle} {...composedProps} />;
}
