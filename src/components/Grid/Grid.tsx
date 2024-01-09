'use client';

import { Grid as MuiGrid, GridClasses as MuiGridClasses, GridProps as MuiGridProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface GridProps extends MuiGridProps {
  /* Add custom prop types here */
}

export type GridClasses = Extract<MuiGridClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function GridStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Grid'
  );
}

const theme: Theme = useTheme();
export const GridStyle: Styles = GridStyles(theme);

export function Grid(props: GridProps) {
  const defaultProps: GridProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: GridProps = { ...defaultProps, ...props };

  return <MuiGrid sx={GridStyle} {...composedProps} />;
}
