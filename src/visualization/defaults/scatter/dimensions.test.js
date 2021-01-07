import fillDimensions, { defaultState } from './dimensions';

describe('Fill dimensions', () => {
  it('should populate selections with defaultState', () => {
    const userDimensions = {
      main: {
        height: 10,
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillDimensions(userDimensions)).toEqual(expected);
  });

  it('should return defaults when no properties are defined', () => {
    const userDimensions = {};
    const expected = {
      main: defaultState,
    };
    expect(fillDimensions(userDimensions)).toEqual(expected);
  });

  it('should return defaults when user-defined dimensions is not an object', () => {
    const userDimensions = [];
    const expected = {
      main: defaultState,
    };
    expect(fillDimensions(userDimensions)).toEqual(expected);
  });

  it('should return defaults when user-defined dimensions undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillDimensions(undefined)).toEqual(expected);
  });
});
