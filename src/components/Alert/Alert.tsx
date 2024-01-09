'use client';

import { Alert as MuiAlert, AlertClasses as MuiAlertClasses, AlertProps as MuiAlertProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface AlertProps extends MuiAlertProps {
  /* Add custom prop types here */
}

export type AlertClasses = Extract<MuiAlertClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function AlertStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Alert'
  );
}

const theme: Theme = useTheme();
export const AlertStyle: Styles = AlertStyles(theme);

export function Alert(props: AlertProps) {
  const defaultProps: AlertProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: AlertProps = { ...defaultProps, ...props };

  return <MuiAlert sx={AlertStyle} {...composedProps} />;
}
