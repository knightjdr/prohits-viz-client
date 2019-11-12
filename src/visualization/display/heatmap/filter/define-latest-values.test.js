import defineLatestValues from './define-latest-values';

describe('Define latest filter settings', () => {
  it('should create an object with the latest settings', () => {
    const settings = {
      filterBy: 'a',
      minAbundance: 5,
      primaryFilter: 0.05,
      removeFailingColumns: true,
      removeFailingRows: true,
      sortBy: 'a',
      sortByRef: 'A',
    };
    const updatedSetting = 'minAbundance';
    const updatedValue = 10;
    const updatedOrder = {};
    const expected = {
      ...settings,
      minAbundance: 10,
    };
    expect(defineLatestValues(updatedSetting, updatedValue, updatedOrder, settings)).toEqual(expected);
  });

  it('should clear sortBy value when an order is specified', () => {
    const settings = {
      filterBy: 'a',
      minAbundance: 5,
      primaryFilter: 0.05,
      removeFailingColumns: true,
      removeFailingRows: true,
      sortBy: 'a',
      sortByRef: 'A',
    };
    const updatedSetting = 'minAbundance';
    const updatedValue = 10;
    const updatedOrder = {
      columns: [1, 2, 3],
    };
    const expected = {
      ...settings,
      sortBy: '',
      minAbundance: 10,
    };
    expect(defineLatestValues(updatedSetting, updatedValue, updatedOrder, settings)).toEqual(expected);
  });
});
