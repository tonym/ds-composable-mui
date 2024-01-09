'use client';

import { Container as MuiContainer, ContainerClasses as MuiContainerClasses, ContainerProps as MuiContainerProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ContainerProps extends MuiContainerProps {
  /* Add custom prop types here */
}

export type ContainerClasses = Extract<
  MuiContainerClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ContainerStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Container'
  );
}

const theme: Theme = useTheme();
export const ContainerStyle: Styles = ContainerStyles(theme);

export function Container(props: ContainerProps) {
  const defaultProps: ContainerProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ContainerProps = { ...defaultProps, ...props };

  return <MuiContainer sx={ContainerStyle} {...composedProps} />;
}
