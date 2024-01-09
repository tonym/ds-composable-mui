'use client';

import { ImageList as MuiImageList, ImageListClasses as MuiImageListClasses, ImageListProps as MuiImageListProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ImageListProps extends MuiImageListProps {
  /* Add custom prop types here */
}

export type ImageListClasses = Extract<
  MuiImageListClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ImageListStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ImageList'
  );
}

const theme: Theme = useTheme();
export const ImageListStyle: Styles = ImageListStyles(theme);

export function ImageList(props: ImageListProps) {
  const defaultProps: ImageListProps = {
    children: ''
    /* Add custom prop defaults here */
  };

  const composedProps: ImageListProps = { ...defaultProps, ...props };

  return <MuiImageList sx={ImageListStyle} {...composedProps} />;
}
