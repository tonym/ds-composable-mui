'use client';

import {
  CardHeader as MuiCardHeader,
  CardHeaderClasses as MuiCardHeaderClasses,
  CardHeaderProps as MuiCardHeaderProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface CardHeaderProps extends MuiCardHeaderProps {
  /* Add custom prop types here */
}

export type CardHeaderClasses = Extract<
  MuiCardHeaderClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function CardHeaderStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'CardHeader'
  );
}

const theme: Theme = useTheme();
export const CardHeaderStyle: Styles = CardHeaderStyles(theme);

export function CardHeader(props: CardHeaderProps) {
  const defaultProps: CardHeaderProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: CardHeaderProps = { ...defaultProps, ...props };

  return <MuiCardHeader sx={CardHeaderStyle} {...composedProps} />;
}
