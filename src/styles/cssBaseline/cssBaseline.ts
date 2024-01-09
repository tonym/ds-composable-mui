import { merge } from 'lodash';
import { Styles, StyleSheet, StyleSheetFactoryOptions } from 'jss';
import { cssBaselineStyles } from './cssBaselineStyles';
import { provideStylesheet } from '../provideStylesheet/index';

const styleSheetFactoryOptions: StyleSheetFactoryOptions = {
  index: 1,
  meta: 'CSS baseline'
};

export function cssBaseline(userStyles: Styles = {}, userStyleSheetFactoryOptions: StyleSheetFactoryOptions = {}): StyleSheet {
  const styles = merge(cssBaselineStyles, userStyles);
  const options = merge(styleSheetFactoryOptions, userStyleSheetFactoryOptions);
  return provideStylesheet(styles, options);
}
