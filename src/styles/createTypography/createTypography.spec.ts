import { merge } from 'lodash';
import { createTypography } from './createTypography';
import { composedTypography } from './composedTypography';
import { defaultTheme } from '../defaultTheme/index';

const { typography } = defaultTheme;
const expectedTypography = merge(typography, composedTypography);

describe('createTypography', () => {
  it('should return the default typography if no options are given', () => {
    const created = createTypography();
    expect(created).toEqual(expectedTypography);
  });
});
