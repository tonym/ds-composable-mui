'use client';

import { SvgIcon as MuiSvgIcon, SvgIconClasses as MuiSvgIconClasses, SvgIconProps as MuiSvgIconProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface SvgIconProps extends MuiSvgIconProps {
  /* Add custom prop types here */
}

export type SvgIconClasses = Extract<
  MuiSvgIconClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function SvgIconStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'SvgIcon'
  );
}

const theme: Theme = useTheme();
export const SvgIconStyle: Styles = SvgIconStyles(theme);

export function SvgIcon(props: SvgIconProps) {
  const defaultProps: SvgIconProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: SvgIconProps = { ...defaultProps, ...props };

  return <MuiSvgIcon sx={SvgIconStyle} {...composedProps} />;
}
