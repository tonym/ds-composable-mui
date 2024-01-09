'use client';

import { TableBody as MuiTableBody, TableBodyClasses as MuiTableBodyClasses, TableBodyProps as MuiTableBodyProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TableBodyProps extends MuiTableBodyProps {
  /* Add custom prop types here */
}

export type TableBodyClasses = Extract<
  MuiTableBodyClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TableBodyStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TableBody'
  );
}

const theme: Theme = useTheme();
export const TableBodyStyle: Styles = TableBodyStyles(theme);

export function TableBody(props: TableBodyProps) {
  const defaultProps: TableBodyProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TableBodyProps = { ...defaultProps, ...props };

  return <MuiTableBody sx={TableBodyStyle} {...composedProps} />;
}
