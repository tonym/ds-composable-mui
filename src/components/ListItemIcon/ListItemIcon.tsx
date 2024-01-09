'use client';

import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconClasses as MuiListItemIconClasses,
  ListItemIconProps as MuiListItemIconProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ListItemIconProps extends MuiListItemIconProps {
  /* Add custom prop types here */
}

export type ListItemIconClasses = Extract<
  MuiListItemIconClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ListItemIconStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ListItemIcon'
  );
}

const theme: Theme = useTheme();
export const ListItemIconStyle: Styles = ListItemIconStyles(theme);

export function ListItemIcon(props: ListItemIconProps) {
  const defaultProps: ListItemIconProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ListItemIconProps = { ...defaultProps, ...props };

  return <MuiListItemIcon sx={ListItemIconStyle} {...composedProps} />;
}
