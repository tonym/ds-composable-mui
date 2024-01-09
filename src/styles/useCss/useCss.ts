import { store } from '../../store/index';

export function useCss(): string {
  return store.getState().css;
}
