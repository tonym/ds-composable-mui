'use client';

import { Step as MuiStep, StepClasses as MuiStepClasses, StepProps as MuiStepProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface StepProps extends MuiStepProps {
  /* Add custom prop types here */
}

export type StepClasses = Extract<MuiStepClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function StepStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Step'
  );
}

const theme: Theme = useTheme();
export const StepStyle: Styles = StepStyles(theme);

export function Step(props: StepProps) {
  const defaultProps: StepProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: StepProps = { ...defaultProps, ...props };

  return <MuiStep sx={StepStyle} {...composedProps} />;
}
