'use client';

import { Paper as MuiPaper, PaperClasses as MuiPaperClasses, PaperProps as MuiPaperProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface PaperProps extends MuiPaperProps {
  /* Add custom prop types here */
}

export type PaperClasses = Extract<MuiPaperClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function PaperStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Paper'
  );
}

const theme: Theme = useTheme();
export const PaperStyle: Styles = PaperStyles(theme);

export function Paper(props: PaperProps) {
  const defaultProps: PaperProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: PaperProps = { ...defaultProps, ...props };

  return <MuiPaper sx={PaperStyle} {...composedProps} />;
}
