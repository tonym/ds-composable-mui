'use client';

import { Collapse as MuiCollapse, CollapseClasses as MuiCollapseClasses, CollapseProps as MuiCollapseProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface CollapseProps extends MuiCollapseProps {
  /* Add custom prop types here */
}

export type CollapseClasses = Extract<
  MuiCollapseClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function CollapseStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Collapse'
  );
}

const theme: Theme = useTheme();
export const CollapseStyle: Styles = CollapseStyles(theme);

export function Collapse(props: CollapseProps) {
  const defaultProps: CollapseProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: CollapseProps = { ...defaultProps, ...props };

  return <MuiCollapse sx={CollapseStyle} {...composedProps} />;
}
