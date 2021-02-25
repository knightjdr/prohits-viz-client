import fillPoints from './points';

describe('Fill points', () => {
  it('should return file-defined points object when valid', () => {
    const filePoints = {
      main: {
        current: [1],
        default: [1, 3],
      },
    };
    const filePlots = [{ points: [1, 3] }];
    const expected = filePoints;
    expect(fillPoints(filePoints, filePlots)).toEqual(expected);
  });

  it('should return points from first plot when file-defined points object invalid', () => {
    const filePoints = {
      main: {
        default: { 1: true, 3: true },
      },
    };
    const filePlots = [{ points: [1, 3] }];
    const expected = {
      main: {
        current: [1, 3],
        default: [1, 3],
      },
    };
    expect(fillPoints(filePoints, filePlots)).toEqual(expected);
  });

  it('should return points from display parameter plot when file-defined points object invalid', () => {
    const fileDisplay = { main: { selectedPlot: 1 } };
    const filePoints = {
      main: {
        default: { 1: true, 3: true },
      },
    };
    const filePlots = [{ points: [1, 3] }, { points: [1, 4] }];
    const expected = {
      main: {
        current: [1, 4],
        default: [1, 4],
      },
    };
    expect(fillPoints(filePoints, filePlots, fileDisplay)).toEqual(expected);
  });

  it('should return points from first plot when no properties are defined', () => {
    const filePoints = {};
    const filePlots = [{ points: [1, 3] }];
    const expected = {
      main: {
        current: [1, 3],
        default: [1, 3],
      },
    };
    expect(fillPoints(filePoints, filePlots)).toEqual(expected);
  });

  it('should return points from first plot when file-defined points is not an object', () => {
    const filePoints = [];
    const filePlots = [{ points: [1, 3] }];
    const expected = {
      main: {
        current: [1, 3],
        default: [1, 3],
      },
    };
    expect(fillPoints(filePoints, filePlots)).toEqual(expected);
  });

  it('should return points from first plot when file-defined points undefined', () => {
    const filePoints = undefined;
    const filePlots = [{ points: [1, 3] }];
    const expected = {
      main: {
        current: [1, 3],
        default: [1, 3],
      },
    };
    expect(fillPoints(filePoints, filePlots)).toEqual(expected);
  });

  it('should return points from display parameter plot when file-defined points object undefined', () => {
    const fileDisplay = { selectedPlot: 1 };
    const filePoints = undefined;
    const filePlots = [{ points: [1, 3] }, { points: [1, 4] }];
    const expected = {
      main: {
        current: [1, 4],
        default: [1, 4],
      },
    };
    expect(fillPoints(filePoints, filePlots, fileDisplay)).toEqual(expected);
  });
});
