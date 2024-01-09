'use client';

import { Card as MuiCard, CardClasses as MuiCardClasses, CardProps as MuiCardProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface CardProps extends MuiCardProps {
  /* Add custom prop types here */
}

export type CardClasses = Extract<MuiCardClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function CardStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Card'
  );
}

const theme: Theme = useTheme();
export const CardStyle: Styles = CardStyles(theme);

export function Card(props: CardProps) {
  const defaultProps: CardProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: CardProps = { ...defaultProps, ...props };

  return <MuiCard sx={CardStyle} {...composedProps} />;
}
