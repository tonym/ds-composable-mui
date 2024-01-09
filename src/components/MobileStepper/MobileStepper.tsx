'use client';

import {
  MobileStepper as MuiMobileStepper,
  MobileStepperClasses as MuiMobileStepperClasses,
  MobileStepperProps as MuiMobileStepperProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface MobileStepperProps extends MuiMobileStepperProps {
  /* Add custom prop types here */
}

export type MobileStepperClasses = Extract<
  MuiMobileStepperClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function MobileStepperStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'MobileStepper'
  );
}

const theme: Theme = useTheme();
export const MobileStepperStyle: Styles = MobileStepperStyles(theme);

export function MobileStepper(props: MobileStepperProps) {
  const defaultProps: MobileStepperProps = {
    backButton: <div />,
    nextButton: <div />,
    steps: 0
    /* Add custom prop defaults here */
  };

  const composedProps: MobileStepperProps = { ...defaultProps, ...props };

  return <MuiMobileStepper sx={MobileStepperStyle} {...composedProps} />;
}
