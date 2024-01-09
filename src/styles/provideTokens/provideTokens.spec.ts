import { provideTokens } from './provideTokens';
import { store } from '../../store/index';

describe('provideTokens', () => {
  it('should provide default tokens', () => {
    provideTokens();
    const providedTokens = store.getState().tokens;
    expect(providedTokens).toEqual('core');
  });

  it('should provide requested tokens', () => {
    const tokens = 'custom1';
    provideTokens(tokens);
    const providedTokens = store.getState().tokens;
    expect(providedTokens).toEqual(tokens);
  });
});
