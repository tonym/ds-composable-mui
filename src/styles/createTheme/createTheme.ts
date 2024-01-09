import { merge } from 'lodash';
import { defaultTheme } from '../defaultTheme/index';
import { Theme, ThemeOptions } from '../../types/index';
import { createBreakpoints } from '../createBreakpoints/index';
import { createPalette } from '../createPalette/index';
import { createShadows } from '../createShadows/index';
import { createTransitions } from '../createTransitions/index';
import { createTypography } from '../createTypography/index';

export function createTheme(userTheme: ThemeOptions = {}): Theme {
  const breakpoints = createBreakpoints(userTheme.breakpoints);
  const components = {};
  const direction = userTheme.direction ? userTheme.direction : defaultTheme.direction;
  const initial = false;
  const media = merge(defaultTheme.media, userTheme.media || {});
  const overrides = merge(defaultTheme.overrides, userTheme.overrides || {});
  const palette = createPalette(userTheme.palette);
  const shadows = userTheme.shadows && userTheme.shadows.length > 1 ? userTheme.shadows : createShadows();
  const shape = userTheme.shape ? { ...userTheme.shape } : { ...defaultTheme.shape };
  const spacing = merge(defaultTheme.spacing, userTheme.spacing || {});
  const transitions = createTransitions(userTheme.transitions);
  const typography = createTypography(userTheme.typography);
  const zIndex = merge(defaultTheme.zIndex, userTheme.zIndex || {});

  return {
    breakpoints,
    components,
    direction,
    initial,
    media,
    overrides,
    palette,
    shadows,
    shape,
    spacing,
    transitions,
    typography,
    zIndex
  };
}
