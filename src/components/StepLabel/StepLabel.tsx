'use client';

import { StepLabel as MuiStepLabel, StepLabelClasses as MuiStepLabelClasses, StepLabelProps as MuiStepLabelProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface StepLabelProps extends MuiStepLabelProps {
  /* Add custom prop types here */
}

export type StepLabelClasses = Extract<
  MuiStepLabelClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function StepLabelStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'StepLabel'
  );
}

const theme: Theme = useTheme();
export const StepLabelStyle: Styles = StepLabelStyles(theme);

export function StepLabel(props: StepLabelProps) {
  const defaultProps: StepLabelProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: StepLabelProps = { ...defaultProps, ...props };

  return <MuiStepLabel sx={StepLabelStyle} {...composedProps} />;
}
