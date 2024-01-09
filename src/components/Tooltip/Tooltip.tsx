'use client';

import { Tooltip as MuiTooltip, TooltipClasses as MuiTooltipClasses, TooltipProps as MuiTooltipProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TooltipProps extends MuiTooltipProps {
  /* Add custom prop types here */
}

export type TooltipClasses = Extract<
  MuiTooltipClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TooltipStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Tooltip'
  );
}

const theme: Theme = useTheme();
export const TooltipStyle: Styles = TooltipStyles(theme);

export function Tooltip(props: TooltipProps) {
  const defaultProps: TooltipProps = {
    children: <div />,
    title: 'Tooltip'
    /* Add custom prop defaults here */
  };

  const composedProps: TooltipProps = { ...defaultProps, ...props };

  return <MuiTooltip sx={TooltipStyle} {...composedProps} />;
}
