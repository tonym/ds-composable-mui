'use client';

import {
  createTheme as muiCreateTheme,
  Theme as MuiTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions as MuiThemeOptions
} from '@mui/material/styles';
import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { provideTheme, useMuiTheme } from '../../styles';
import { ThemeOptions } from '../../types';

export interface ThemeProviderProps extends Partial<MuiThemeProviderProps> {
  themeOptions?: ThemeOptions;
}

export function ThemeProvider({ children, themeOptions }: ThemeProviderProps) {
  provideTheme(themeOptions);
  const coreMuiTheme: MuiThemeOptions = useMuiTheme() as MuiThemeOptions;
  const theme: MuiTheme = muiCreateTheme(coreMuiTheme);
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
