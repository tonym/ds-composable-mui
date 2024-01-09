'use client';

import {
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupClasses as MuiAvatarGroupClasses,
  AvatarGroupProps as MuiAvatarGroupProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface AvatarGroupProps extends MuiAvatarGroupProps {
  /* Add custom prop types here */
}

export type AvatarGroupClasses = Extract<
  MuiAvatarGroupClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function AvatarGroupStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'AvatarGroup'
  );
}

const theme: Theme = useTheme();
export const AvatarGroupStyle: Styles = AvatarGroupStyles(theme);

export function AvatarGroup(props: AvatarGroupProps) {
  const defaultProps: AvatarGroupProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: AvatarGroupProps = { ...defaultProps, ...props };

  return <MuiAvatarGroup sx={AvatarGroupStyle} {...composedProps} />;
}
