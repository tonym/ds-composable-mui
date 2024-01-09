'use client';

import { Chip as MuiChip, ChipClasses as MuiChipClasses, ChipProps as MuiChipProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ChipProps extends MuiChipProps {
  /* Add custom prop types here */
}

export type ChipClasses = Extract<MuiChipClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function ChipStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Chip'
  );
}

const theme: Theme = useTheme();
export const ChipStyle: Styles = ChipStyles(theme);

export function Chip(props: ChipProps) {
  const defaultProps: ChipProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ChipProps = { ...defaultProps, ...props };

  return <MuiChip sx={ChipStyle} {...composedProps} />;
}
