'use client';

import { Tabs as MuiTabs, TabsClasses as MuiTabsClasses, TabsProps as MuiTabsProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TabsProps extends MuiTabsProps {
  /* Add custom prop types here */
}

export type TabsClasses = Extract<MuiTabsClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function TabsStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Tabs'
  );
}

const theme: Theme = useTheme();
export const TabsStyle: Styles = TabsStyles(theme);

export function Tabs(props: TabsProps) {
  const defaultProps: TabsProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TabsProps = { ...defaultProps, ...props };

  return <MuiTabs sx={TabsStyle} {...composedProps} />;
}
