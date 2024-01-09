'use client';

import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemAvatarClasses as MuiListItemAvatarClasses,
  ListItemAvatarProps as MuiListItemAvatarProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ListItemAvatarProps extends MuiListItemAvatarProps {
  /* Add custom prop types here */
}

export type ListItemAvatarClasses = Extract<
  MuiListItemAvatarClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ListItemAvatarStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ListItemAvatar'
  );
}

const theme: Theme = useTheme();
export const ListItemAvatarStyle: Styles = ListItemAvatarStyles(theme);

export function ListItemAvatar(props: ListItemAvatarProps) {
  const defaultProps: ListItemAvatarProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ListItemAvatarProps = { ...defaultProps, ...props };

  return <MuiListItemAvatar sx={ListItemAvatarStyle} {...composedProps} />;
}
