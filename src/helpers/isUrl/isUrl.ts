import { isString } from '../isString/index';

export function isUrl(value: any): boolean {
  return isString(value) ? /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(value) : false;
}
