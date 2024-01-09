'use client';

import { Tab as MuiTab, TabClasses as MuiTabClasses, TabProps as MuiTabProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TabProps extends MuiTabProps {
  /* Add custom prop types here */
}

export type TabClasses = Extract<MuiTabClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function TabStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Tab'
  );
}

const theme: Theme = useTheme();
export const TabStyle: Styles = TabStyles(theme);

export function Tab(props: TabProps) {
  const defaultProps: TabProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TabProps = { ...defaultProps, ...props };

  return <MuiTab sx={TabStyle} {...composedProps} />;
}
