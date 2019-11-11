import { filterAndOrderColumns, filterAndOrderRows } from './filter-and-order';

describe('Filter and order columns', () => {
  it('should remove columns not passing latest setting values', () => {
    const rowDB = [
      { data: [{ score: 0.01, value: 5 }, { score: 0.07, value: 15 }, { score: 0.01, value: 2.5 }] },
      { data: [{ score: 0.05, value: 2 }, { score: 0.02, value: 2 }, { score: 0.01, value: 10 }] },
      { data: [{ score: 0.15, value: 10 }, { score: 0.2, value: 25 }, { score: 0, value: 4 }] },
    ];
    const rowOrder = [2, 0];
    const scoreType = 'lte';
    const startingOrder = [0, 2, 1];
    const latestValues = {
      minAbundance: 5,
      primaryFilter: 0.01,
    };
    const expected = [0];
    expect(filterAndOrderColumns(rowDB, rowOrder, startingOrder, scoreType, latestValues)).toEqual(expected);
  });
});

describe('Filter and order rows rows', () => {
  it('should filter by indices', () => {
    const indices = {
      columns: [0, 2],
      rows: [1, 2],
    };
    const rowDB = [
      { data: [{ score: 0.01, value: 4 }, { score: 0.05, value: 15 }, { score: 0.01, value: 2.5 }] },
      { data: [{ score: 0.05, value: 2 }, { score: 0.02, value: 2 }, { score: 0.05, value: 10 }] },
      { data: [{ score: 0.15, value: 10 }, { score: 0, value: 25 }, { score: 0, value: 5 }] },
    ];
    const scoreType = 'lte';
    const latestValues = {
      minAbundance: 5,
      primaryFilter: 0.01,
    };
    const expected = [2];
    expect(filterAndOrderRows(rowDB, indices, scoreType, latestValues)).toEqual(expected);
  });
});
