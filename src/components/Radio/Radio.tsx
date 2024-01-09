'use client';

import { Radio as MuiRadio, RadioClasses as MuiRadioClasses, RadioProps as MuiRadioProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface RadioProps extends MuiRadioProps {
  /* Add custom prop types here */
}

export type RadioClasses = Extract<MuiRadioClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function RadioStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Radio'
  );
}

const theme: Theme = useTheme();
export const RadioStyle: Styles = RadioStyles(theme);

export function Radio(props: RadioProps) {
  const defaultProps: RadioProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: RadioProps = { ...defaultProps, ...props };

  return <MuiRadio sx={RadioStyle} {...composedProps} />;
}
