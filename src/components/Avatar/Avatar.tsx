'use client';

import { Avatar as MuiAvatar, AvatarClasses as MuiAvatarClasses, AvatarProps as MuiAvatarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface AvatarProps extends MuiAvatarProps {
  /* Add custom prop types here */
}

export type AvatarClasses = Extract<MuiAvatarClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function AvatarStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Avatar'
  );
}

const theme: Theme = useTheme();
export const AvatarStyle: Styles = AvatarStyles(theme);

export function Avatar(props: AvatarProps) {
  const defaultProps: AvatarProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: AvatarProps = { ...defaultProps, ...props };

  return <MuiAvatar sx={AvatarStyle} {...composedProps} />;
}
