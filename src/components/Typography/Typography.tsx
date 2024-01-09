'use client';

import {
  Typography as MuiTypography,
  TypographyClasses as MuiTypographyClasses,
  TypographyProps as MuiTypographyProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface TypographyProps extends MuiTypographyProps {
  /* Add custom prop types here */
}

export type TypographyClasses = Extract<
  MuiTypographyClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function TypographyStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Typography'
  );
}

const theme: Theme = useTheme();
export const TypographyStyle: Styles = TypographyStyles(theme);

export function Typography(props: TypographyProps) {
  const defaultProps: TypographyProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: TypographyProps = { ...defaultProps, ...props };

  return <MuiTypography sx={TypographyStyle} {...composedProps} />;
}
