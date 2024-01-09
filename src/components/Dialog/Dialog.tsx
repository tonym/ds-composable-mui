'use client';

import { Dialog as MuiDialog, DialogClasses as MuiDialogClasses, DialogProps as MuiDialogProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface DialogProps extends MuiDialogProps {
  /* Add custom prop types here */
}

export type DialogClasses = Extract<MuiDialogClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function DialogStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Dialog'
  );
}

const theme: Theme = useTheme();
export const DialogStyle: Styles = DialogStyles(theme);

export function Dialog(props: DialogProps) {
  const defaultProps: DialogProps = {
    open: false
    /* Add custom prop defaults here */
  };

  const composedProps: DialogProps = { ...defaultProps, ...props };

  return <MuiDialog sx={DialogStyle} {...composedProps} />;
}
