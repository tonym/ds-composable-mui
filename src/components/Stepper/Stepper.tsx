'use client';

import { Stepper as MuiStepper, StepperClasses as MuiStepperClasses, StepperProps as MuiStepperProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface StepperProps extends MuiStepperProps {
  /* Add custom prop types here */
}

export type StepperClasses = Extract<
  MuiStepperClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function StepperStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Stepper'
  );
}

const theme: Theme = useTheme();
export const StepperStyle: Styles = StepperStyles(theme);

export function Stepper(props: StepperProps) {
  const defaultProps: StepperProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: StepperProps = { ...defaultProps, ...props };

  return <MuiStepper sx={StepperStyle} {...composedProps} />;
}
