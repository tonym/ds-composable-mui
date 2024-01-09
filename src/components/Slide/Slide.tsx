'use client';

import { Slide as MuiSlide, SlideProps as MuiSlideProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface SlideProps extends MuiSlideProps {
  /* Add custom prop types here */
}

export function SlideStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Slide'
  );
}

const theme: Theme = useTheme();
export const SlideStyle: Styles = SlideStyles(theme);

export function Slide(props: SlideProps) {
  const defaultProps: SlideProps = {
    children: <div />
    /* Add custom prop defaults here */
  };

  const composedProps: SlideProps = { ...defaultProps, ...props };

  return <MuiSlide {...composedProps} />;
}
