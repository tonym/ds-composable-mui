'use client';

import {
  CardContent as MuiCardContent,
  CardContentClasses as MuiCardContentClasses,
  CardContentProps as MuiCardContentProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface CardContentProps extends MuiCardContentProps {
  /* Add custom prop types here */
}

export type CardContentClasses = Extract<
  MuiCardContentClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function CardContentStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'CardContent'
  );
}

const theme: Theme = useTheme();
export const CardContentStyle: Styles = CardContentStyles(theme);

export function CardContent(props: CardContentProps) {
  const defaultProps: CardContentProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: CardContentProps = { ...defaultProps, ...props };

  return <MuiCardContent sx={CardContentStyle} {...composedProps} />;
}
