'use client';

import {
  StepContent as MuiStepContent,
  StepContentClasses as MuiStepContentClasses,
  StepContentProps as MuiStepContentProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface StepContentProps extends MuiStepContentProps {
  /* Add custom prop types here */
}

export type StepContentClasses = Extract<
  MuiStepContentClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function StepContentStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'StepContent'
  );
}

const theme: Theme = useTheme();
export const StepContentStyle: Styles = StepContentStyles(theme);

export function StepContent(props: StepContentProps) {
  const defaultProps: StepContentProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: StepContentProps = { ...defaultProps, ...props };

  return <MuiStepContent sx={StepContentStyle} {...composedProps} />;
}
