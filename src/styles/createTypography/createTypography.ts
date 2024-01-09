import { merge } from 'lodash';
import { composedTypography } from './composedTypography';
import { defaultTheme } from '../defaultTheme/index';
import { TypographyTs, TypographyOptions } from '../../types/index';

export function createTypography(userTypographyOptions: TypographyOptions = { variants: {} }): TypographyTs {
  const { typography } = defaultTheme;
  const mergedOptions = merge({}, composedTypography, userTypographyOptions);
  return merge({}, typography, mergedOptions);
}
