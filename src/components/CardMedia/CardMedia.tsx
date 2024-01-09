'use client';

import { CardMedia as MuiCardMedia, CardMediaClasses as MuiCardMediaClasses, CardMediaProps as MuiCardMediaProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface CardMediaProps extends MuiCardMediaProps {
  /* Add custom prop types here */
}

export type CardMediaClasses = Extract<
  MuiCardMediaClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function CardMediaStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'CardMedia'
  );
}

const theme: Theme = useTheme();
export const CardMediaStyle: Styles = CardMediaStyles(theme);

export function CardMedia(props: CardMediaProps) {
  const defaultProps: CardMediaProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: CardMediaProps = { ...defaultProps, ...props };

  return <MuiCardMedia sx={CardMediaStyle} {...composedProps} />;
}
