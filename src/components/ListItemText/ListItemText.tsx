'use client';

import {
  ListItemText as MuiListItemText,
  ListItemTextClasses as MuiListItemTextClasses,
  ListItemTextProps as MuiListItemTextProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ListItemTextProps extends MuiListItemTextProps {
  /* Add custom prop types here */
}

export type ListItemTextClasses = Extract<
  MuiListItemTextClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ListItemTextStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ListItemText'
  );
}

const theme: Theme = useTheme();
export const ListItemTextStyle: Styles = ListItemTextStyles(theme);

export function ListItemText(props: ListItemTextProps) {
  const defaultProps: ListItemTextProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ListItemTextProps = { ...defaultProps, ...props };

  return <MuiListItemText sx={ListItemTextStyle} {...composedProps} />;
}
