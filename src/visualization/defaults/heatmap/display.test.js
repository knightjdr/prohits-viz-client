import fillDisplay, { defaultState } from './display';

describe('Fill display', () => {
  it('should return user-defined display when valid', () => {
    const userDisplay = {
      main: {
        deleteFromImage: true,
        reorderImage: true,
        plotFixed: true,
        showTooltips: true,
      },
    };
    const expected = {
      main: {
        ...defaultState,
        ...userDisplay.main,
      },
    };
    expect(fillDisplay(userDisplay)).toEqual(expected);
  });

  it('should return defaults when user-defined display options invalid', () => {
    const userDisplay = {
      main: {
        deleteFromImage: 'true',
        reorderImage: 'true',
        plotFixed: 'true',
        showTooltips: 'true',
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(userDisplay)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const userDisplay = {};
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(userDisplay)).toEqual(expected);
  });

  it('should return defaults when user-defined display is not an object', () => {
    const userDisplay = [];
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(userDisplay)).toEqual(expected);
  });

  it('should return defaults when user-defined display undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(undefined)).toEqual(expected);
  });
});
