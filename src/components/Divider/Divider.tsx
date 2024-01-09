'use client';

import { Divider as MuiDivider, DividerClasses as MuiDividerClasses, DividerProps as MuiDividerProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface DividerProps extends MuiDividerProps {
  /* Add custom prop types here */
}

export type DividerClasses = Extract<
  MuiDividerClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function DividerStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Divider'
  );
}

const theme: Theme = useTheme();
export const DividerStyle: Styles = DividerStyles(theme);

export function Divider(props: DividerProps) {
  const defaultProps: DividerProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: DividerProps = { ...defaultProps, ...props };

  return <MuiDivider sx={DividerStyle} {...composedProps} />;
}
