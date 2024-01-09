'use client';

import { Grow as MuiGrow, GrowProps as MuiGrowProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface GrowProps extends MuiGrowProps {
  /* Add custom prop types here */
}

export function GrowStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Grow'
  );
}

const theme: Theme = useTheme();
export const GrowStyle: Styles = GrowStyles(theme);

export function Grow(props: GrowProps) {
  const defaultProps: GrowProps = {
    children: <span></span>
    /* Add custom prop defaults here */
  };

  const composedProps: GrowProps = { ...defaultProps, ...props };

  return <MuiGrow {...composedProps} />;
}
