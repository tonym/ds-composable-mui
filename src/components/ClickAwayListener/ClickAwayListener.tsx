'use client';

import { ClickAwayListener as MuiClickAwayListener, ClickAwayListenerProps as MuiClickAwayListenerProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ClickAwayListenerProps extends MuiClickAwayListenerProps {
  /* Add custom prop types here */
}

export function ClickAwayListenerStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ClickAwayListener'
  );
}

const theme: Theme = useTheme();
export const ClickAwayListenerStyle: Styles = ClickAwayListenerStyles(theme);

export function ClickAwayListener(props: ClickAwayListenerProps) {
  return <MuiClickAwayListener sx={ClickAwayListenerStyle} {...props} />;
}
