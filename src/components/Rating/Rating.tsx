'use client';

import { Rating as MuiRating, RatingClasses as MuiRatingClasses, RatingProps as MuiRatingProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface RatingProps extends MuiRatingProps {
  /* Add custom prop types here */
}

export type RatingClasses = Extract<MuiRatingClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function RatingStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Rating'
  );
}

const theme: Theme = useTheme();
export const RatingStyle: Styles = RatingStyles(theme);

export function Rating(props: RatingProps) {
  const defaultProps: RatingProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: RatingProps = { ...defaultProps, ...props };

  return <MuiRating sx={RatingStyle} {...composedProps} />;
}
