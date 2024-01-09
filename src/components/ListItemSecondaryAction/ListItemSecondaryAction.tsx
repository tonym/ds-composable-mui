'use client';

import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  ListItemSecondaryActionClasses as MuiListItemSecondaryActionClasses,
  ListItemSecondaryActionProps as MuiListItemSecondaryActionProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ListItemSecondaryActionProps extends MuiListItemSecondaryActionProps {
  /* Add custom prop types here */
}

export type ListItemSecondaryActionClasses = Extract<
  MuiListItemSecondaryActionClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ListItemSecondaryActionStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ListItemSecondaryAction'
  );
}

const theme: Theme = useTheme();
export const ListItemSecondaryActionStyle: Styles = ListItemSecondaryActionStyles(theme);

export function ListItemSecondaryAction(props: ListItemSecondaryActionProps) {
  const defaultProps: ListItemSecondaryActionProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ListItemSecondaryActionProps = { ...defaultProps, ...props };

  return <MuiListItemSecondaryAction sx={ListItemSecondaryActionStyle} {...composedProps} />;
}
