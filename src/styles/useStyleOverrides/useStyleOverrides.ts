import { StyleOverrides } from '../../types/index';
import { useTheme } from '../useTheme/index';

export function useStyleOverrides(): StyleOverrides {
  const theme = useTheme();

  const styleOverrides = {};

  return styleOverrides;
}
