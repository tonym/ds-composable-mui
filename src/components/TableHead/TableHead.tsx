'use client';

import { TableHead as MuiTableHead, TableHeadClasses as MuiTableHeadClasses, TableHeadProps as MuiTableHeadProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TableHeadProps extends MuiTableHeadProps {
  /* Add custom prop types here */
}

export type TableHeadClasses = Extract<
  MuiTableHeadClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TableHeadStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TableHead'
  );
}

const theme: Theme = useTheme();
export const TableHeadStyle: Styles = TableHeadStyles(theme);

export function TableHead(props: TableHeadProps) {
  const defaultProps: TableHeadProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TableHeadProps = { ...defaultProps, ...props };

  return <MuiTableHead sx={TableHeadStyle} {...composedProps} />;
}
