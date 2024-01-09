import { merge } from 'lodash';
import { Overrides, Styles } from '../../types/index';
import { useTheme } from '../../styles/useTheme/index';

export function applyOverrides(styles: Styles, component: string): Styles {
  const theme = useTheme();
  const overrides: Overrides | undefined = { ...theme.overrides };
  const override: Styles = overrides[component] || {};
  return merge(styles, override);
}
