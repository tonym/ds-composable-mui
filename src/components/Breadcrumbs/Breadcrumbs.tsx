'use client';

import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsClasses as MuiBreadcrumbsClasses,
  BreadcrumbsProps as MuiBreadcrumbsProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  /* Add custom prop types here */
}

export type BreadcrumbsClasses = Extract<
  MuiBreadcrumbsClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function BreadcrumbsStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Breadcrumbs'
  );
}

const theme: Theme = useTheme();
export const BreadcrumbsStyle: Styles = BreadcrumbsStyles(theme);

export function Breadcrumbs(props: BreadcrumbsProps) {
  const defaultProps: BreadcrumbsProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: BreadcrumbsProps = { ...defaultProps, ...props };

  return <MuiBreadcrumbs sx={BreadcrumbsStyle} {...composedProps} />;
}
