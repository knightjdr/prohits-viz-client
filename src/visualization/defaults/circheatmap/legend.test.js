import fillLegend from './legend';

describe('Fill legend state', () => {
  it('should use return valid input state', () => {
    const fileLegend = [
      { color: '#000000', min: 0, max: 50 },
    ];

    const expected = [
      { color: '#000000', min: 0, max: 50 },
    ];
    expect(fillLegend(fileLegend)).toEqual(expected);
  });

  it('should return defaults when file-defined legend variable is not an array', () => {
    const fileLegend = {};
    const expected = [];
    expect(fillLegend(fileLegend)).toEqual(expected);
  });

  it('should return defaults when file-defined legend variable undefined', () => {
    const expected = [];
    expect(fillLegend()).toEqual(expected);
  });
});
