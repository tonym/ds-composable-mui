'use client';

import { Menu as MuiMenu, MenuClasses as MuiMenuClasses, MenuProps as MuiMenuProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface MenuProps extends MuiMenuProps {
  /* Add custom prop types here */
}

export type MenuClasses = Extract<MuiMenuClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function MenuStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Menu'
  );
}

const theme: Theme = useTheme();
export const MenuStyle: Styles = MenuStyles(theme);

export function Menu(props: MenuProps) {
  const defaultProps: MenuProps = {
    open: false
    /* Add custom prop defaults here */
  };

  const composedProps: MenuProps = { ...defaultProps, ...props };

  return <MuiMenu sx={MenuStyle} {...composedProps} />;
}
