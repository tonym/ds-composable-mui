'use client';

import {
  TableContainer as MuiTableContainer,
  TableContainerClasses as MuiTableContainerClasses,
  TableContainerProps as MuiTableContainerProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TableContainerProps extends MuiTableContainerProps {
  /* Add custom prop types here */
}

export type TableContainerClasses = Extract<
  MuiTableContainerClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TableContainerStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TableContainer'
  );
}

const theme: Theme = useTheme();
export const TableContainerStyle: Styles = TableContainerStyles(theme);

export function TableContainer(props: TableContainerProps) {
  const defaultProps: TableContainerProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TableContainerProps = { ...defaultProps, ...props };

  return <MuiTableContainer sx={TableContainerStyle} {...composedProps} />;
}
