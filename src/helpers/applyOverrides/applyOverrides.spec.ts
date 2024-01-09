import { applyOverrides } from './applyOverrides';
import { provideTheme } from '../../styles/index';

describe('applyOverrides', () => {
  it('should update component styles with overrides', () => {
    const themeOptions = {
      overrides: {
        Fab: {
          root: {
            fontFamily: '"Comic Sans", sans-serif'
          }
        }
      }
    };
    provideTheme(themeOptions);
    const appliedOverride = applyOverrides(
      {
        root: {
          fontFamily: '"Open Sans"'
        }
      },
      'Fab'
    );
    expect(appliedOverride.root).toEqual(themeOptions.overrides.Fab.root);
  });
});
