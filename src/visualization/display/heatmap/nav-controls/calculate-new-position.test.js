import calculatePlotPosition from './calculate-plot-position';

describe('Name of the group', () => {
  it('should increment position when within bounds', () => {
    const imageHeight = 10;
    const pageHeight = 5;
    const position = { x: 0, y: 0 };

    const expected = { x: 0, y: 1 };
    expect(calculatePlotPosition(position, 'y', imageHeight, pageHeight, 1)).toEqual(expected);
  });

  it('should set position to lower bound', () => {
    const imageHeight = 10;
    const pageHeight = 5;
    const position = { x: 0, y: 1 };

    const expected = { x: 0, y: 0 };
    expect(calculatePlotPosition(position, 'y', imageHeight, pageHeight, -5)).toEqual(expected);
  });

  it('should set position to upper bound', () => {
    const imageHeight = 10;
    const pageHeight = 5;
    const position = { x: 0, y: 0 };

    const expected = { x: 0, y: 5 };
    expect(calculatePlotPosition(position, 'y', imageHeight, pageHeight, 10)).toEqual(expected);
  });
});
