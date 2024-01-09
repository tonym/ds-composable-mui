'use client';

import {
  NativeSelect as MuiNativeSelect,
  NativeSelectClasses as MuiNativeSelectClasses,
  NativeSelectProps as MuiNativeSelectProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface NativeSelectProps extends MuiNativeSelectProps {
  /* Add custom prop types here */
}

export type NativeSelectClasses = Extract<
  MuiNativeSelectClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function NativeSelectStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'NativeSelect'
  );
}

const theme: Theme = useTheme();
export const NativeSelectStyle: Styles = NativeSelectStyles(theme);

export function NativeSelect(props: NativeSelectProps) {
  const defaultProps: NativeSelectProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: NativeSelectProps = { ...defaultProps, ...props };

  return <MuiNativeSelect sx={NativeSelectStyle} {...composedProps} />;
}
