import fillLines, { defaultState } from './lines';

describe('Fill lines', () => {
  it('should return user-defined lines when valid', () => {
    const userLines = {
      main: {
        dashLength: 10,
        fclines: [-10, 10],
        isDashed: false,
        showFcLines: true,
        showMidline: true,
      },
    };
    const expected = {
      main: {
        ...defaultState,
        ...userLines.main,
      },
    };
    expect(fillLines(userLines)).toEqual(expected);
  });

  it('should return user-defined lines when valid but without snapshot identifiers', () => {
    const userLines = {
      dashLength: 10,
      fclines: [-10, 10],
      isDashed: false,
      showFcLines: true,
      showMidline: true,
    };
    const expected = {
      main: userLines,
    };
    expect(fillLines(userLines)).toEqual(expected);
  });

  it('should return defaults when user-defined lines options invalid', () => {
    const userLabels = {
      main: {
        dashLength: '10',
        fclines: {},
        isDashed: 'false',
        showFcLines: 'true',
        showMidline: 'true',
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillLines(userLabels)).toEqual(expected);
  });

  it('should return defaults when no properties are defined', () => {
    const userLines = {};
    const expected = {
      main: defaultState,
    };
    expect(fillLines(userLines)).toEqual(expected);
  });

  it('should return defaults when user-defined lines is not an object', () => {
    const userLines = [];
    const expected = {
      main: defaultState,
    };
    expect(fillLines(userLines)).toEqual(expected);
  });

  it('should return defaults when user-defined lines undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillLines(undefined)).toEqual(expected);
  });
});
