'use client';

import { TableCell as MuiTableCell, TableCellClasses as MuiTableCellClasses, TableCellProps as MuiTableCellProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TableCellProps extends MuiTableCellProps {
  /* Add custom prop types here */
}

export type TableCellClasses = Extract<
  MuiTableCellClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TableCellStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TableCell'
  );
}

const theme: Theme = useTheme();
export const TableCellStyle: Styles = TableCellStyles(theme);

export function TableCell(props: TableCellProps) {
  const defaultProps: TableCellProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TableCellProps = { ...defaultProps, ...props };

  return <MuiTableCell sx={TableCellStyle} {...composedProps} />;
}
