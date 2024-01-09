'use client';

import { Toolbar as MuiToolbar, ToolbarClasses as MuiToolbarClasses, ToolbarProps as MuiToolbarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ToolbarProps extends MuiToolbarProps {
  /* Add custom prop types here */
}

export type ToolbarClasses = Extract<
  MuiToolbarClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ToolbarStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Toolbar'
  );
}

const theme: Theme = useTheme();
export const ToolbarStyle: Styles = ToolbarStyles(theme);

export function Toolbar(props: ToolbarProps) {
  const defaultProps: ToolbarProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ToolbarProps = { ...defaultProps, ...props };

  return <MuiToolbar sx={ToolbarStyle} {...composedProps} />;
}
