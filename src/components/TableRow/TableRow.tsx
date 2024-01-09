'use client';

import { TableRow as MuiTableRow, TableRowClasses as MuiTableRowClasses, TableRowProps as MuiTableRowProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TableRowProps extends MuiTableRowProps {
  /* Add custom prop types here */
}

export type TableRowClasses = Extract<
  MuiTableRowClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TableRowStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TableRow'
  );
}

const theme: Theme = useTheme();
export const TableRowStyle: Styles = TableRowStyles(theme);

export function TableRow(props: TableRowProps) {
  const defaultProps: TableRowProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TableRowProps = { ...defaultProps, ...props };

  return <MuiTableRow sx={TableRowStyle} {...composedProps} />;
}
