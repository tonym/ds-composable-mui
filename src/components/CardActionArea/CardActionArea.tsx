'use client';

import {
  CardActionArea as MuiCardActionArea,
  CardActionAreaClasses as MuiCardActionAreaClasses,
  CardActionAreaProps as MuiCardActionAreaProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface CardActionAreaProps extends MuiCardActionAreaProps {
  /* Add custom prop types here */
}

export type CardActionAreaClasses = Extract<
  MuiCardActionAreaClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function CardActionAreaStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'CardActionArea'
  );
}

const theme: Theme = useTheme();
export const CardActionAreaStyle: Styles = CardActionAreaStyles(theme);

export function CardActionArea(props: CardActionAreaProps) {
  const defaultProps: CardActionAreaProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: CardActionAreaProps = { ...defaultProps, ...props };

  return <MuiCardActionArea sx={CardActionAreaStyle} {...composedProps} />;
}
