import { ModeColorOptions, PaletteMode } from '../../types';
import { lighten } from '../lighten/index';
import { darken } from '../darken/index';

export function selectModeColor(color: string, type: PaletteMode = 'light', options: ModeColorOptions = {}): string {
  const defaultOptions: ModeColorOptions = { darkenBy: 0.5, lightenBy: 0.62 };
  const modeColorOptions: ModeColorOptions = { ...defaultOptions, ...options };
  const { darkenBy, lightenBy } = modeColorOptions;
  return type === 'light' ? lighten(color, lightenBy) : darken(color, darkenBy);
}
