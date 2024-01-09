'use client';

import {
  StepConnector as MuiStepConnector,
  StepConnectorClasses as MuiStepConnectorClasses,
  StepConnectorProps as MuiStepConnectorProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface StepConnectorProps extends MuiStepConnectorProps {
  /* Add custom prop types here */
}

export type StepConnectorClasses = Extract<
  MuiStepConnectorClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function StepConnectorStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'StepConnector'
  );
}

const theme: Theme = useTheme();
export const StepConnectorStyle: Styles = StepConnectorStyles(theme);

export function StepConnector(props: StepConnectorProps) {
  const defaultProps: StepConnectorProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: StepConnectorProps = { ...defaultProps, ...props };

  return <MuiStepConnector sx={StepConnectorStyle} {...composedProps} />;
}
