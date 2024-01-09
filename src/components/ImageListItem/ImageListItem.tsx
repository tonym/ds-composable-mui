'use client';

import {
  ImageListItem as MuiImageListItem,
  ImageListItemClasses as MuiImageListItemClasses,
  ImageListItemProps as MuiImageListItemProps
} from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ImageListItemProps extends MuiImageListItemProps {
  /* Add custom prop types here */
}

export type ImageListItemClasses = Extract<
  MuiImageListItemClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function ImageListItemStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'ImageListItem'
  );
}

const theme: Theme = useTheme();
export const ImageListItemStyle: Styles = ImageListItemStyles(theme);

export function ImageListItem(props: ImageListItemProps) {
  const defaultProps: ImageListItemProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: ImageListItemProps = { ...defaultProps, ...props };

  return <MuiImageListItem sx={ImageListItemStyle} {...composedProps} />;
}
