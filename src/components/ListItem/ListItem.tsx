'use client';

import { ListItem as MuiListItem, ListItemClasses as MuiListItemClasses, ListItemProps as MuiListItemProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ListItemProps extends MuiListItemProps {
  /* Add custom prop types here */
}

export type ListItemClasses = Extract<
  MuiListItemClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ListItemStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ListItem'
  );
}

const theme: Theme = useTheme();
export const ListItemStyle: Styles = ListItemStyles(theme);

export function ListItem(props: ListItemProps) {
  const defaultProps: ListItemProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ListItemProps = { ...defaultProps, ...props };

  return <MuiListItem sx={ListItemStyle} {...composedProps} />;
}
