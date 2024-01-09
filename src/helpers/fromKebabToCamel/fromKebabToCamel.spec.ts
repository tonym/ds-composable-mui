import { fromKebabToCamel } from './fromKebabToCamel';

describe('fromCamelToDash', () => {
  it('should covert kebab-case to camelCase', () => {
    const initialString = 'call-me-ishmael';
    const expectedString = 'callMeIshmael';
    const returnedString = fromKebabToCamel(initialString);
    expect(returnedString).toBe(expectedString);
  });
});
