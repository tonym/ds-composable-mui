'use client';

import { Icon as MuiIcon, IconClasses as MuiIconClasses, IconProps as MuiIconProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface IconProps extends MuiIconProps {
  /* Add custom prop types here */
}

export type IconClasses = Extract<MuiIconClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function IconStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Icon'
  );
}

const theme: Theme = useTheme();
export const IconStyle: Styles = IconStyles(theme);

export function Icon(props: IconProps) {
  const defaultProps: IconProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: IconProps = { ...defaultProps, ...props };

  return <MuiIcon sx={IconStyle} {...composedProps} />;
}
