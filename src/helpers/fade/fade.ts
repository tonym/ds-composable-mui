import { ColorObject } from '../../types/index';
import { clamp } from '../clamp/index';
import { decomposeColor } from '../decomposeColor/index';
import { recomposeColor } from '../recomposeColor/index';

export function fade(color: string, value: number): string {
  const decomposedColor: ColorObject = decomposeColor(color);
  const clampedValue = clamp(value);
  if (decomposedColor.type === 'rgb' || decomposedColor.type === 'hsl') {
    decomposedColor.type = `${decomposedColor.type}a`;
  }
  decomposedColor.values[3] = clampedValue;
  return recomposeColor(decomposedColor);
}
