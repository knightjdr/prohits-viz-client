import fillReadouts from './readouts';

describe('Fill readouts', () => {
  it('should return file-defined readouts object when valid', () => {
    const fileReadouts = {
      main: {
        current: [1],
        default: [1, 3],
      },
    };
    const filePlots = [{ readouts: [1, 3] }];
    const expected = fileReadouts;
    expect(fillReadouts(fileReadouts, filePlots)).toEqual(expected);
  });

  it('should return readouts from first plot when file-defined readouts object invalid', () => {
    const fileReadouts = {
      main: {
        default: { 1: true, 3: true },
      },
    };
    const filePlots = [{ readouts: [1, 3] }];
    const expected = {
      main: {
        current: [1, 3],
        default: [1, 3],
      },
    };
    expect(fillReadouts(fileReadouts, filePlots)).toEqual(expected);
  });

  it('should return readouts from display parameter plot when file-defined readouts object invalid', () => {
    const fileDisplay = { main: { selectedPlot: 1 } };
    const fileReadouts = {
      main: {
        default: { 1: true, 3: true },
      },
    };
    const filePlots = [{ readouts: [1, 3] }, { readouts: [1, 4] }];
    const expected = {
      main: {
        current: [1, 4],
        default: [1, 4],
      },
    };
    expect(fillReadouts(fileReadouts, filePlots, fileDisplay)).toEqual(expected);
  });

  it('should return readouts from first plot when no properties are defined', () => {
    const fileReadouts = {};
    const filePlots = [{ readouts: [1, 3] }];
    const expected = {
      main: {
        current: [1, 3],
        default: [1, 3],
      },
    };
    expect(fillReadouts(fileReadouts, filePlots)).toEqual(expected);
  });

  it('should return readouts from first plot when file-defined readouts is not an object', () => {
    const fileReadouts = [];
    const filePlots = [{ readouts: [1, 3] }];
    const expected = {
      main: {
        current: [1, 3],
        default: [1, 3],
      },
    };
    expect(fillReadouts(fileReadouts, filePlots)).toEqual(expected);
  });

  it('should return readouts from first plot when file-defined readouts undefined', () => {
    const fileReadouts = undefined;
    const filePlots = [{ readouts: [1, 3] }];
    const expected = {
      main: {
        current: [1, 3],
        default: [1, 3],
      },
    };
    expect(fillReadouts(fileReadouts, filePlots)).toEqual(expected);
  });

  it('should return readouts from display parameter plot when file-defined readouts object undefined', () => {
    const fileDisplay = { selectedPlot: 1 };
    const fileReadouts = undefined;
    const filePlots = [{ readouts: [1, 3] }, { readouts: [1, 4] }];
    const expected = {
      main: {
        current: [1, 4],
        default: [1, 4],
      },
    };
    expect(fillReadouts(fileReadouts, filePlots, fileDisplay)).toEqual(expected);
  });
});
