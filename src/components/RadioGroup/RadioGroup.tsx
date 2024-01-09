'use client';

import { RadioGroup as MuiRadioGroup, RadioGroupProps as MuiRadioGroupProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface RadioGroupProps extends MuiRadioGroupProps {
  /* Add custom prop types here */
}

export function RadioGroupStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'RadioGroup'
  );
}

const theme: Theme = useTheme();
export const RadioGroupStyle: Styles = RadioGroupStyles(theme);

export function RadioGroup(props: RadioGroupProps) {
  const defaultProps: RadioGroupProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: RadioGroupProps = { ...defaultProps, ...props };

  return <MuiRadioGroup sx={RadioGroupStyle} {...composedProps} />;
}
