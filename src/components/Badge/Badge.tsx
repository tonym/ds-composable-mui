'use client';

import { Badge as MuiBadge, BadgeClasses as MuiBadgeClasses, BadgeProps as MuiBadgeProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface BadgeProps extends MuiBadgeProps {
  /* Add custom prop types here */
}

export type BadgeClasses = Extract<MuiBadgeClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function BadgeStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Badge'
  );
}

const theme: Theme = useTheme();
export const BadgeStyle: Styles = BadgeStyles(theme);

export function Badge(props: BadgeProps) {
  const defaultProps: BadgeProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: BadgeProps = { ...defaultProps, ...props };

  return <MuiBadge sx={BadgeStyle} {...composedProps} />;
}
