'use client';

import { StepIcon as MuiStepIcon, StepIconClasses as MuiStepIconClasses, StepIconProps as MuiStepIconProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface StepIconProps extends MuiStepIconProps {
  /* Add custom prop types here */
}

export type StepIconClasses = Extract<
  MuiStepIconClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function StepIconStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'StepIcon'
  );
}

const theme: Theme = useTheme();
export const StepIconStyle: Styles = StepIconStyles(theme);

export function StepIcon(props: StepIconProps) {
  const defaultProps: StepIconProps = {
    icon: <span className="material-icons MuiStepIcon-icon">check</span>
    /* Add custom prop defaults here */
  };

  const composedProps: StepIconProps = { ...defaultProps, ...props };

  return <MuiStepIcon sx={StepIconStyle} {...composedProps} />;
}
