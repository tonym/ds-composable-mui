'use client';

import { Fade as MuiFade, FadeProps as MuiFadeProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface FadeProps extends MuiFadeProps {
  /* Add custom prop types here */
}

export function FadeStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Fade'
  );
}

const theme: Theme = useTheme();
export const FadeStyle: Styles = FadeStyles(theme);

export function Fade(props: FadeProps) {
  const defaultProps: FadeProps = {
    children: <span></span>
    /* Add custom prop defaults here */
  };

  const composedProps: FadeProps = { ...defaultProps, ...props };

  return <MuiFade {...composedProps} />;
}
