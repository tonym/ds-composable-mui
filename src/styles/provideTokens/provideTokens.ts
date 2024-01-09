import { store, setTokens } from '../../store/index';

export function provideTokens(tokens: string = 'core') {
  store.dispatch(setTokens(tokens));
}
