import fillPosition, { defaultState } from './position';

describe('Fill position', () => {
  it('should return user options when valid', () => {
    const position = {
      x: 0.5,
      y: 0.5,
    };
    const expected = position;
    expect(fillPosition(position)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const position = {
      x: 'a',
      y: 'a',
    };
    const expected = defaultState;
    expect(fillPosition(position)).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const position = {};
    const expected = defaultState;
    expect(fillPosition(position)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = defaultState;
    expect(fillPosition(undefined)).toEqual(expected);
  });
});
