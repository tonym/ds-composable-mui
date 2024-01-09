'use client';

import {
  IconButton as MuiIconButton,
  IconButtonClasses as MuiIconButtonClasses,
  IconButtonProps as MuiIconButtonProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface IconButtonProps extends MuiIconButtonProps {
  /* Add custom prop types here */
}

export type IconButtonClasses = Extract<
  MuiIconButtonClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function IconButtonStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'IconButton'
  );
}

const theme: Theme = useTheme();
export const IconButtonStyle: Styles = IconButtonStyles(theme);

export function IconButton(props: IconButtonProps) {
  const defaultProps: IconButtonProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: IconButtonProps = { ...defaultProps, ...props };

  return <MuiIconButton sx={IconButtonStyle} {...composedProps} />;
}
