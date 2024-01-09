'use client';

import {
  ListSubheader as MuiListSubheader,
  ListSubheaderClasses as MuiListSubheaderClasses,
  ListSubheaderProps as MuiListSubheaderProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ListSubheaderProps extends MuiListSubheaderProps {
  /* Add custom prop types here */
}

export type ListSubheaderClasses = Extract<
  MuiListSubheaderClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ListSubheaderStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ListSubheader'
  );
}

const theme: Theme = useTheme();
export const ListSubheaderStyle: Styles = ListSubheaderStyles(theme);

export function ListSubheader(props: ListSubheaderProps) {
  const defaultProps: ListSubheaderProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ListSubheaderProps = { ...defaultProps, ...props };

  return <MuiListSubheader sx={ListSubheaderStyle} {...composedProps} />;
}
