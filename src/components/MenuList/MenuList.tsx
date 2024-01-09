'use client';

import { MenuList as MuiMenuList, ListClasses as MuiListClasses, MenuListProps as MuiMenuListProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface MenuListProps extends MuiMenuListProps {
  /* Add custom prop types here */
}

export type MenuListClasses = Extract<MuiListClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function MenuListStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'MenuList'
  );
}

const theme: Theme = useTheme();
export const MenuListStyle: Styles = MenuListStyles(theme);

export function MenuList(props: MenuListProps) {
  const defaultProps: MenuListProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: MenuListProps = { ...defaultProps, ...props };

  return <MuiMenuList sx={MenuListStyle} {...composedProps} />;
}
