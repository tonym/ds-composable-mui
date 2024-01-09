'use client';

import {
  StepButton as MuiStepButton,
  StepButtonClasses as MuiStepButtonClasses,
  StepButtonProps as MuiStepButtonProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface StepButtonProps extends MuiStepButtonProps {
  /* Add custom prop types here */
}

export type StepButtonClasses = Extract<
  MuiStepButtonClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function StepButtonStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'StepButton'
  );
}

const theme: Theme = useTheme();
export const StepButtonStyle: Styles = StepButtonStyles(theme);

export function StepButton(props: StepButtonProps) {
  const defaultProps: StepButtonProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: StepButtonProps = { ...defaultProps, ...props };

  return <MuiStepButton sx={StepButtonStyle} {...composedProps} />;
}
