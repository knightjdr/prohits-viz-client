import fillDisplay, { defaultState } from './display';

describe('Fill display', () => {
  it('should return user-defined display when valid', () => {
    const userDisplay = {
      main: {
        plotFixed: true,
        selectedPlot: 1,
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
        plotFixed: 'true',
        selectedPlot: '1',
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

  it('should return defaults when user-defined minimap is not an object', () => {
    const userDisplay = [];
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(userDisplay)).toEqual(expected);
  });

  it('should return defaults when user-defined minimap undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillDisplay(undefined)).toEqual(expected);
  });
});
