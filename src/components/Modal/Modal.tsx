'use client';

import { Modal as MuiModal, ModalClasses as MuiModalClasses, ModalProps as MuiModalProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';

export interface ModalProps extends MuiModalProps {
  /* Add custom prop types here */
}

export type ModalClasses = Extract<MuiModalClasses, 'root' /* Add custom class names here as a union type (| 'example1' | 'example2') */>;

export function ModalStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      /* Add custom styles here using JSS and add the class names to the Classes type */
    },
    'Modal'
  );
}

const theme: Theme = useTheme();
export const ModalStyle: Styles = ModalStyles(theme);

export function Modal(props: ModalProps) {
  const defaultProps: ModalProps = {
    children: <span />,
    open: false
    /* Add custom prop defaults here */
  };

  const composedProps: ModalProps = { ...defaultProps, ...props };

  return <MuiModal sx={ModalStyle} {...composedProps} />;
}
