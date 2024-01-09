'use client';

import { Skeleton as MuiSkeleton, SkeletonClasses as MuiSkeletonClasses, SkeletonProps as MuiSkeletonProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface SkeletonProps extends MuiSkeletonProps {
  /* Add custom prop types here */
}

export type SkeletonClasses = Extract<
  MuiSkeletonClasses,
  'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */
>;

export function SkeletonStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Skeleton'
  );
}

const theme: Theme = useTheme();
export const SkeletonStyle: Styles = SkeletonStyles(theme);

export function Skeleton(props: SkeletonProps) {
  const defaultProps: SkeletonProps = {
    /* Add custom prop defaults here */
  };

  const composedProps: SkeletonProps = { ...defaultProps, ...props };

  return <MuiSkeleton sx={SkeletonStyle} {...composedProps} />;
}
