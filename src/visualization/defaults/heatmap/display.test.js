import fillDisplay, { defaultState } from './display';

describe('Fill display', () => {
  it('should return user-defined display when valid', () => {
    const userMinimap = {
      main: {
        plotFixed: true,
      },
    };
    const expected = {
      main: {
        ...defaultState,
        ...userMinimap.main,
      },
    };
    expect(fillDisplay(userMinimap)).toEqual(expected);
  });

  it('should return defaults when user-defined display options invalid', () => {
    const userMinimap = {
      main: {
        plotFixed: 'true',
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(userMinimap)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const userMinimap = {};
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(userMinimap)).toEqual(expected);
  });

  it('should return defaults when user-defined minimap is not an object', () => {
    const userMinimap = [];
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(userMinimap)).toEqual(expected);
  });

  it('should return defaults when user-defined minimap undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(undefined)).toEqual(expected);
  });
});
