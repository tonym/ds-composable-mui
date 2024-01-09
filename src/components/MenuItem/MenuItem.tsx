'use client';

import { MenuItem as MuiMenuItem, MenuItemClasses as MuiMenuItemClasses, MenuItemProps as MuiMenuItemProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface MenuItemProps extends MuiMenuItemProps {
  /* Add custom prop types here */
}

export type MenuItemClasses = Extract<
  MuiMenuItemClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function MenuItemStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'MenuItem'
  );
}

const theme: Theme = useTheme();
export const MenuItemStyle: Styles = MenuItemStyles(theme);

export function MenuItem(props: MenuItemProps) {
  const defaultProps: MenuItemProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: MenuItemProps = { ...defaultProps, ...props };

  return <MuiMenuItem sx={MenuItemStyle} {...composedProps} />;
}
