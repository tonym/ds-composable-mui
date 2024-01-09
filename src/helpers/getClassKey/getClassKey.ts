import { globalConstants } from '../../constants/index';

export function getClassKey(value: string): string {
  return globalConstants.prefix + globalConstants.delimiter + value;
}
