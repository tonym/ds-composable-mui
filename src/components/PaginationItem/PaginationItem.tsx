'use client';

import {
  PaginationItem as MuiPaginationItem,
  PaginationItemClasses as MuiPaginationItemClasses,
  PaginationItemProps as MuiPaginationItemProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface PaginationItemProps extends MuiPaginationItemProps {
  /* Add custom prop types here */
}

export type PaginationItemClasses = Extract<
  MuiPaginationItemClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function PaginationItemStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'PaginationItem'
  );
}

const theme: Theme = useTheme();
export const PaginationItemStyle: Styles = PaginationItemStyles(theme);

export function PaginationItem(props: PaginationItemProps) {
  const defaultProps: PaginationItemProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: PaginationItemProps = { ...defaultProps, ...props };

  return <MuiPaginationItem sx={PaginationItemStyle} {...composedProps} />;
}
