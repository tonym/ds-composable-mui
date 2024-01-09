import { getLuminance } from '../getLuminance/index';

export function getContrastRatio(foreground: string, background: string): number {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return parseFloat(((Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05)).toFixed(2));
}
