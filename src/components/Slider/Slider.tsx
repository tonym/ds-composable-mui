'use client';

import { Slider as MuiSlider, SliderClasses as MuiSliderClasses, SliderProps as MuiSliderProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface SliderProps extends MuiSliderProps {
  /* Add custom prop types here */
}

export type SliderClasses = Extract<MuiSliderClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function SliderStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Slider'
  );
}

const theme: Theme = useTheme();
export const SliderStyle: Styles = SliderStyles(theme);

export function Slider(props: SliderProps) {
  const defaultProps: SliderProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: SliderProps = { ...defaultProps, ...props };

  return <MuiSlider sx={SliderStyle} {...composedProps} />;
}
