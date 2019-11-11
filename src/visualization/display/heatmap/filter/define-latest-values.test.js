import defineLatestValues from './define-latest-values';

describe('Define latest filter settings', () => {
  it('should create an object with the latest settings', () => {
    const settings = {
      filterBy: 'a',
      minAbundance: 5,
      primaryFilter: 0.05,
      removeEmptyColumns: true,
    };
    const updatedSetting = 'minAbundance';
    const updatedValue = 10;
    const expected = {
      ...settings,
      minAbundance: 10,
    };
    expect(defineLatestValues(updatedSetting, updatedValue, settings)).toEqual(expected);
  });
});