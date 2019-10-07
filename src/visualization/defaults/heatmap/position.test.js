import fillPosition, { defaultState } from './position';

describe('Fill position', () => {
  it('should return user-defined position when valid', () => {
    const userPosition = {
      main: {
        x: 0.5,
        y: 0.5,
      },
    };
    const expected = userPosition;
    expect(fillPosition(userPosition)).toEqual(expected);
  });

  it('should return defaults when user-defined position options invalid', () => {
    const userPosition = {
      main: {
        x: 'a',
        y: 'a',
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillPosition(userPosition)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const userPosition = {};
    const expected = {
      main: defaultState,
    };
    expect(fillPosition(userPosition)).toEqual(expected);
  });

  it('should return defaults when user-defined position is not an object', () => {
    const userPosition = [];
    const expected = {
      main: defaultState,
    };
    expect(fillPosition(userPosition)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillPosition(undefined)).toEqual(expected);
  });
});
