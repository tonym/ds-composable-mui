'use client';

import {
  ButtonProps as MuiButtonProps,
  ListItemButton as MuiListItemButton,
  ListItemButtonClasses as MuiListItemButtonClasses,
  ListItemButtonProps as MuiListItemButtonProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ListItemButtonProps extends MuiListItemButtonProps {
  href?: MuiButtonProps['href'];
  target?: string;
}

export type ListItemButtonClasses = Extract<
  MuiListItemButtonClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ListItemButtonStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ListItemButton'
  );
}

const theme: Theme = useTheme();
export const ListItemButtonStyle: Styles = ListItemButtonStyles(theme);

export function ListItemButton(props: ListItemButtonProps) {
  const defaultProps: ListItemButtonProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ListItemButtonProps = { ...defaultProps, ...props };

  return <MuiListItemButton sx={ListItemButtonStyle} {...composedProps} />;
}
