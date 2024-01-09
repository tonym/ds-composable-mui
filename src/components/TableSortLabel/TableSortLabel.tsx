'use client';

import {
  TableSortLabel as MuiTableSortLabel,
  TableSortLabelClasses as MuiTableSortLabelClasses,
  TableSortLabelProps as MuiTableSortLabelProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TableSortLabelProps extends MuiTableSortLabelProps {
  /* Add custom prop types here */
}

export type TableSortLabelClasses = Extract<
  MuiTableSortLabelClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TableSortLabelStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TableSortLabel'
  );
}

const theme: Theme = useTheme();
export const TableSortLabelStyle: Styles = TableSortLabelStyles(theme);

export function TableSortLabel(props: TableSortLabelProps) {
  const defaultProps: TableSortLabelProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TableSortLabelProps = { ...defaultProps, ...props };

  return <MuiTableSortLabel sx={TableSortLabelStyle} {...composedProps} />;
}
