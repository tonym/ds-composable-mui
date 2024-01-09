'use client';

import {
  DialogTitle as MuiDialogTitle,
  DialogTitleClasses as MuiDialogTitleClasses,
  DialogTitleProps as MuiDialogTitleProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface DialogTitleProps extends MuiDialogTitleProps {
  /* Add custom prop types here */
}

export type DialogTitleClasses = Extract<
  MuiDialogTitleClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function DialogTitleStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'DialogTitle'
  );
}

const theme: Theme = useTheme();
export const DialogTitleStyle: Styles = DialogTitleStyles(theme);

export function DialogTitle(props: DialogTitleProps) {
  const defaultProps: DialogTitleProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: DialogTitleProps = { ...defaultProps, ...props };

  return <MuiDialogTitle sx={DialogTitleStyle} {...composedProps} />;
}
