'use client';

import { Stack as MuiStack, StackClasses as MuiStackClasses, StackProps as MuiStackProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface StackProps extends MuiStackProps {
  /* Add custom prop types here */
}

export type StackClasses = Extract<MuiStackClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function StackStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Stack'
  );
}

const theme: Theme = useTheme();
export const StackStyle: Styles = StackStyles(theme);

export function Stack(props: StackProps) {
  const defaultProps: StackProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: StackProps = { ...defaultProps, ...props };

  return <MuiStack sx={StackStyle} {...composedProps} />;
}
