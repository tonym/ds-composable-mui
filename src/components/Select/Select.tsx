'use client';

import { Select as MuiSelect, SelectClasses as MuiSelectClasses, SelectProps as MuiSelectProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface SelectProps extends MuiSelectProps {
  /* Add custom prop types here */
}

export type SelectClasses = Extract<MuiSelectClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function SelectStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Select'
  );
}

const theme: Theme = useTheme();
export const SelectStyle: Styles = SelectStyles(theme);

export function Select(props: SelectProps) {
  const defaultProps: SelectProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: SelectProps = { ...defaultProps, ...props };

  return <MuiSelect sx={SelectStyle} {...composedProps} />;
}
