'use client';

import {
  ImageListItemBar as MuiImageListItemBar,
  ImageListItemBarClasses as MuiImageListItemBarClasses,
  ImageListItemBarProps as MuiImageListItemBarProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ImageListItemBarProps extends MuiImageListItemBarProps {
  /* Add custom prop types here */
}

export type ImageListItemBarClasses = Extract<
  MuiImageListItemBarClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ImageListItemBarStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ImageListItemBar'
  );
}

const theme: Theme = useTheme();
export const ImageListItemBarStyle: Styles = ImageListItemBarStyles(theme);

export function ImageListItemBar(props: ImageListItemBarProps) {
  const defaultProps: ImageListItemBarProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ImageListItemBarProps = { ...defaultProps, ...props };

  return <MuiImageListItemBar sx={ImageListItemBarStyle} {...composedProps} />;
}
