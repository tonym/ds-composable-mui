'use client';

import { Link as MuiLink, LinkClasses as MuiLinkClasses, LinkProps as MuiLinkProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface LinkProps extends MuiLinkProps {
  /* Add custom prop types here */
}

export type LinkClasses = Extract<MuiLinkClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function LinkStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Link'
  );
}

const theme: Theme = useTheme();
export const LinkStyle: Styles = LinkStyles(theme);

export function Link(props: LinkProps) {
  const defaultProps: LinkProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: LinkProps = { ...defaultProps, ...props };

  return <MuiLink sx={LinkStyle} {...composedProps} />;
}
