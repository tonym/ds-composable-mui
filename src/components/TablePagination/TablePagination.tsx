'use client';

import {
  TablePagination as MuiTablePagination,
  TablePaginationClasses as MuiTablePaginationClasses,
  TablePaginationProps as MuiTablePaginationProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export type TablePaginationProps = MuiTablePaginationProps & {
  /* Add custom prop types here */
};

export type TablePaginationClasses = Extract<
  MuiTablePaginationClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TablePaginationStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TablePagination'
  );
}

const theme: Theme = useTheme();
export const TablePaginationStyle: Styles = TablePaginationStyles(theme);

export function TablePagination(props: TablePaginationProps) {
  const defaultProps: TablePaginationProps = {
    count: 0,
    onPageChange: () => {},
    page: 0,
    rowsPerPage: 0
    /* Add custom prop defaults here */
  };

  const composedProps: TablePaginationProps = { ...defaultProps, ...props };

  return <MuiTablePagination sx={TablePaginationStyle} {...composedProps} />;
}
