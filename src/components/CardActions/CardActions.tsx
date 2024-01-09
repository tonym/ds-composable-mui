'use client';

import {
  CardActions as MuiCardActions,
  CardActionsClasses as MuiCardActionsClasses,
  CardActionsProps as MuiCardActionsProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface CardActionsProps extends MuiCardActionsProps {
  /* Add custom prop types here */
}

export type CardActionsClasses = Extract<
  MuiCardActionsClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function CardActionsStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'CardActions'
  );
}

const theme: Theme = useTheme();
export const CardActionsStyle: Styles = CardActionsStyles(theme);

export function CardActions(props: CardActionsProps) {
  const defaultProps: CardActionsProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: CardActionsProps = { ...defaultProps, ...props };

  return <MuiCardActions sx={CardActionsStyle} {...composedProps} />;
}
