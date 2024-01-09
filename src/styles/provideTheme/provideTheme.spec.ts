import { provideTheme } from './provideTheme';
import { useTheme } from '../useTheme/index';
import { ThemeOptions } from '../../types/index';
import { createTheme } from '../createTheme/index';

describe('provideTheme', () => {
  it('should provide a theme', () => {
    provideTheme();
    const providedTheme = useTheme();
    const expectedTheme = createTheme();
    expect(providedTheme).toEqual(expectedTheme);
  });

  it('should provide a theme from theme options', () => {
    const themeOptions: ThemeOptions = {
      direction: 'rtl'
    };
    provideTheme(themeOptions);
    const providedTheme = useTheme();
    const expectedTheme = createTheme(themeOptions);
    expect(providedTheme).toEqual(expectedTheme);
  });
});
