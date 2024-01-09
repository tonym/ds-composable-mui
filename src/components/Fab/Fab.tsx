'use client';

import { Fab as MuiFab, FabClasses as MuiFabClasses, FabProps as MuiFabProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface FabProps extends MuiFabProps {
  /* Add custom prop types here */
}

export type FabClasses = Extract<MuiFabClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function FabStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Fab'
  );
}

const theme: Theme = useTheme();
export const FabStyle: Styles = FabStyles(theme);

export function Fab(props: FabProps) {
  const defaultProps: FabProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: FabProps = { ...defaultProps, ...props };

  return <MuiFab sx={FabStyle} {...composedProps} />;
}
