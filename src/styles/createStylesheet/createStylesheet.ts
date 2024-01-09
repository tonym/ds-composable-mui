import jss, { Styles, StyleSheet, StyleSheetFactoryOptions } from 'jss';
import { defaultJssOptions } from '../defaultTheme/index';

export function createStylesheet(styles: Styles, options: StyleSheetFactoryOptions = {}): StyleSheet {
  jss.setup(defaultJssOptions);
  return jss.createStyleSheet(styles, options);
}
