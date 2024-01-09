'use client';

import { List as MuiList, ListClasses as MuiListClasses, ListProps as MuiListProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ListProps extends MuiListProps {
  /* Add custom prop types here */
}

export type ListClasses = Extract<MuiListClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function ListStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'List'
  );
}

const theme: Theme = useTheme();
export const ListStyle: Styles = ListStyles(theme);

export function List(props: ListProps) {
  const defaultProps: ListProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ListProps = { ...defaultProps, ...props };

  return <MuiList sx={ListStyle} {...composedProps} />;
}
