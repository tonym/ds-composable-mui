'use client';

import {
  AlertTitle as MuiAlertTitle,
  AlertTitleClasses as MuiAlertTitleClasses,
  AlertTitleProps as MuiAlertTitleProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface AlertTitleProps extends MuiAlertTitleProps {
  /* Add custom prop types here */
}

export type AlertTitleClasses = Extract<
  MuiAlertTitleClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function AlertTitleStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'AlertTitle'
  );
}

const theme: Theme = useTheme();
export const AlertTitleStyle: Styles = AlertTitleStyles(theme);

export function AlertTitle(props: AlertTitleProps) {
  const defaultProps: AlertTitleProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: AlertTitleProps = { ...defaultProps, ...props };

  return <MuiAlertTitle sx={AlertTitleStyle} {...composedProps} />;
}
