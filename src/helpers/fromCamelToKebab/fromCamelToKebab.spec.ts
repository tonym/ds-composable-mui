import { fromCamelToKebab } from './fromCamelToKebab';

describe('fromCamelToDash', () => {
  it('should covert camelCase to kebab-case', () => {
    const initialString = 'callMeIshmael';
    const expectedString = 'call-me-ishmael';
    const returnedString = fromCamelToKebab(initialString);
    expect(returnedString).toBe(expectedString);
  });
});
