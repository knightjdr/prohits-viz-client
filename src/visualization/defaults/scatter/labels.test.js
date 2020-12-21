import fillLabels, { defaultState } from './labels';

describe('Fill labels', () => {
  it('should return user-defined labels when valid', () => {
    const userLabels = {
      main: {
        showAll: true,
        status: {
          labelA: true,
          labelB: false,
        },
      },
    };
    const expected = {
      main: {
        ...defaultState,
        ...userLabels.main,
      },
    };
    expect(fillLabels(userLabels)).toEqual(expected);
  });

  it('should return defaults when user-defined labels options invalid', () => {
    const userLabels = {
      main: {
        showAll: 'true',
        status: 'labelA',
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillLabels(userLabels)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const userLabels = {};
    const expected = {
      main: defaultState,
    };
    expect(fillLabels(userLabels)).toEqual(expected);
  });

  it('should return defaults when user-defined display is not an object', () => {
    const userLabels = [];
    const expected = {
      main: defaultState,
    };
    expect(fillLabels(userLabels)).toEqual(expected);
  });

  it('should return defaults when user-defined display undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillLabels(undefined)).toEqual(expected);
  });
});
