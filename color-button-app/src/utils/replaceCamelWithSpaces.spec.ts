import { replaceCamelWithSpaces } from './replaceCamelWithSpaces';

describe('replaceCamelWithSpaces', () => {
  it('returns one word when given no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  it('returns two words when given one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  it('returns multiple words when given multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
