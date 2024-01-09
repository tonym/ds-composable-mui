'use client';

import { Hidden as MuiHidden, HiddenProps as MuiHiddenProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface HiddenProps extends MuiHiddenProps {
  /* Add custom prop types here */
}

export function HiddenStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Hidden'
  );
}

const theme: Theme = useTheme();
export const HiddenStyle: Styles = HiddenStyles(theme);

export function Hidden(props: HiddenProps) {
  const defaultProps: HiddenProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: HiddenProps = { ...defaultProps, ...props };

  return <MuiHidden {...composedProps} />;
}
