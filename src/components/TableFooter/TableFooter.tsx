'use client';

import {
  TableFooter as MuiTableFooter,
  TableFooterClasses as MuiTableFooterClasses,
  TableFooterProps as MuiTableFooterProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TableFooterProps extends MuiTableFooterProps {
  /* Add custom prop types here */
}

export type TableFooterClasses = Extract<
  MuiTableFooterClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TableFooterStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'TableFooter'
  );
}

const theme: Theme = useTheme();
export const TableFooterStyle: Styles = TableFooterStyles(theme);

export function TableFooter(props: TableFooterProps) {
  const defaultProps: TableFooterProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TableFooterProps = { ...defaultProps, ...props };

  return <MuiTableFooter sx={TableFooterStyle} {...composedProps} />;
}
