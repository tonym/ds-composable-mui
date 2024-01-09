'use client';

import {
  Pagination as MuiPagination,
  PaginationClasses as MuiPaginationClasses,
  PaginationProps as MuiPaginationProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface PaginationProps extends MuiPaginationProps {
  /* Add custom prop types here */
}

export type PaginationClasses = Extract<
  MuiPaginationClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function PaginationStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Pagination'
  );
}

const theme: Theme = useTheme();
export const PaginationStyle: Styles = PaginationStyles(theme);

export function Pagination(props: PaginationProps) {
  const defaultProps: PaginationProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: PaginationProps = { ...defaultProps, ...props };

  return <MuiPagination sx={PaginationStyle} {...composedProps} />;
}
