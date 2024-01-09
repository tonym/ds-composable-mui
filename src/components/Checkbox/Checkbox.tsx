'use client';

import { Checkbox as MuiCheckbox, CheckboxClasses as MuiCheckboxClasses, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface CheckboxProps extends MuiCheckboxProps {
  /* Add custom prop types here */
}

export type CheckboxClasses = Extract<
  MuiCheckboxClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function CheckboxStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Checkbox'
  );
}

const theme: Theme = useTheme();
export const CheckboxStyle: Styles = CheckboxStyles(theme);

export function Checkbox(props: CheckboxProps) {
  const defaultProps: CheckboxProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: CheckboxProps = { ...defaultProps, ...props };

  return <MuiCheckbox sx={CheckboxStyle} {...composedProps} />;
}
