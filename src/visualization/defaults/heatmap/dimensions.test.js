import fillDimensions, { defaultState } from './dimensions';

describe('Fill dimensions', () => {
  it('should populate dimensions with defaultState', () => {
    const userDimensions = {
      main: {
        columns: 10,
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillDimensions(userDimensions)).toEqual(expected);
  });

  it('should populate dimensions with defaultState for available snapshots but no dimension properties', () => {
    const availableSnapshots = ['main', 'snapshot-1'];
    const userDimensions = {};
    const expected = {
      main: defaultState,
      'snapshot-1': defaultState,
    };
    expect(fillDimensions(userDimensions, availableSnapshots)).toEqual(expected);
  });

  it('should return defaults when no dimensions are defined', () => {
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
