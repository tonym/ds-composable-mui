import { MuiShadows, MuiThemeOptions } from '../../types/index';
import { provideTheme } from '../provideTheme/index';
import { useTheme } from '../useTheme/index';
import { useStyleOverrides } from '../useStyleOverrides/index';

export function useMuiTheme(): MuiThemeOptions {
  provideTheme();

  const dsprotoTheme = useTheme();
  const styleOverrides = useStyleOverrides();
  const muiStyleOverrides = {};

  const keys = Object.keys(styleOverrides);
  keys.forEach(key => (muiStyleOverrides[`Mui${key}`] = styleOverrides[key]));

  const muiTheme: MuiThemeOptions = {
    breakpoints: {
      values: dsprotoTheme.breakpoints?.values
    },
    components: muiStyleOverrides,
    direction: dsprotoTheme.direction,
    palette: dsprotoTheme.palette,
    shadows: dsprotoTheme.shadows as MuiShadows,
    shape: dsprotoTheme.shape,
    spacing: dsprotoTheme.spacing?.unit,
    transitions: {
      duration: dsprotoTheme.transitions?.duration,
      easing: dsprotoTheme.transitions?.easing
    },
    typography: {
      ...dsprotoTheme.typography?.variants,
      htmlFontSize: dsprotoTheme.typography?.htmlFontSize,
      fontFamily: dsprotoTheme.typography?.fontFamily,
      fontSize: dsprotoTheme.typography?.fontSize
    }
  };

  return muiTheme;
}
