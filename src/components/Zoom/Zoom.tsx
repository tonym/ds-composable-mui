'use client';

import { Zoom as MuiZoom, ZoomProps as MuiZoomProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ZoomProps extends MuiZoomProps {
  /* Add custom prop types here */
}

export function ZoomStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Zoom'
  );
}

const theme: Theme = useTheme();
export const ZoomStyle: Styles = ZoomStyles(theme);

export function Zoom(props: ZoomProps) {
  const defaultProps: ZoomProps = {
    children: <div />
    /* Add custom prop defaults here */
  };

  const composedProps: ZoomProps = { ...defaultProps, ...props };

  return <MuiZoom {...composedProps} />;
}
