'use client';

import {
  DialogActions as MuiDialogActions,
  DialogActionsClasses as MuiDialogActionsClasses,
  DialogActionsProps as MuiDialogActionsProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface DialogActionsProps extends MuiDialogActionsProps {
  /* Add custom prop types here */
}

export type DialogActionsClasses = Extract<
  MuiDialogActionsClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function DialogActionsStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'DialogActions'
  );
}

const theme: Theme = useTheme();
export const DialogActionsStyle: Styles = DialogActionsStyles(theme);

export function DialogActions(props: DialogActionsProps) {
  const defaultProps: DialogActionsProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: DialogActionsProps = { ...defaultProps, ...props };

  return <MuiDialogActions sx={DialogActionsStyle} {...composedProps} />;
}
