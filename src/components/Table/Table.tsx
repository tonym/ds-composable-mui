'use client';

import { Table as MuiTable, TableClasses as MuiTableClasses, TableProps as MuiTableProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TableProps extends MuiTableProps {
  /* Add custom prop types here */
}

export type TableClasses = Extract<MuiTableClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function TableStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Table'
  );
}

const theme: Theme = useTheme();
export const TableStyle: Styles = TableStyles(theme);

export function Table(props: TableProps) {
  const defaultProps: TableProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TableProps = { ...defaultProps, ...props };

  return <MuiTable sx={TableStyle} {...composedProps} />;
}
