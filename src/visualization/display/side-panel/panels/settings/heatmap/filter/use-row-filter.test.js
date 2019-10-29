import {
  defineLatestValues,
  defineScoreCriterion,
  defineStartingColumnOrder,
  defineStartingRowOrder,
  filterAndOrderColumns,
  filterAndOrderRows,
  findColumnIndices,
} from './use-row-filter';

describe('Row filtering', () => {
  describe('latest filter settings', () => {
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

  describe('score criterion', () => {
    describe('greater scores better', () => {
      let func;

      beforeAll(() => {
        const scoreType = 'gte';
        const primaryFilter = 0.5;
        func = defineScoreCriterion(scoreType, primaryFilter);
      });

      it('should return true for undefined', () => {
        expect(func(undefined)).toBeTruthy();
      });

      it('should return true when score is = filter', () => {
        expect(func(0.5)).toBeTruthy();
      });

      it('should return true when score is > filter', () => {
        expect(func(0.51)).toBeTruthy();
      });

      it('should return false when score is < filter', () => {
        expect(func(0.49)).toBeFalsy();
      });
    });

    describe('smaller scores better', () => {
      let func;

      beforeAll(() => {
        const scoreType = 'lte';
        const primaryFilter = 0.5;
        func = defineScoreCriterion(scoreType, primaryFilter);
      });

      it('should return true for undefined', () => {
        expect(func(undefined)).toBeTruthy();
      });

      it('should return true when score is = filter', () => {
        expect(func(0.5)).toBeTruthy();
      });

      it('should return true when score is < filter', () => {
        expect(func(0.49)).toBeTruthy();
      });

      it('should return false when score is > filter', () => {
        expect(func(0.51)).toBeFalsy();
      });
    });
  });

  describe('starting column order', () => {
    it('should return default order when columns have not been sorted', () => {
      const defaultOrder = ['a', 'b', 'c'];
      const sortOrder = [];
      const expected = defaultOrder;
      expect(defineStartingColumnOrder(defaultOrder, sortOrder)).toEqual(expected);
    });

    it('should return current sort order when columns have been sorted', () => {
      const defaultOrder = ['a', 'b', 'c'];
      const sortOrder = ['b', 'a', 'c'];
      const expected = sortOrder;
      expect(defineStartingColumnOrder(defaultOrder, sortOrder)).toEqual(expected);
    });
  });

  describe('starting row order', () => {
    it('should return default order when rows have not been sorted', () => {
      const defaultOrder = ['a', 'b', 'c'];
      const setting = 'minAbundance';
      const sortOrder = [];
      const expected = defaultOrder;
      expect(defineStartingRowOrder(setting, defaultOrder, sortOrder)).toEqual(expected);
    });

    it('should return default order when filtering by a new column', () => {
      const defaultOrder = ['a', 'b', 'c'];
      const setting = 'filterBy';
      const sortOrder = [];
      const expected = defaultOrder;
      expect(defineStartingRowOrder(setting, defaultOrder, sortOrder)).toEqual(expected);
    });

    it('should return current sort order when rows have been sorted and no filtering by a new column', () => {
      const defaultOrder = ['a', 'b', 'c'];
      const setting = 'minAbundance';
      const sortOrder = ['b', 'a', 'c'];
      const expected = sortOrder;
      expect(defineStartingRowOrder(setting, defaultOrder, sortOrder)).toEqual(expected);
    });
  });

  describe('filter columns', () => {
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

  describe('filter rows', () => {
    it('should filter by columns when indices are supplied', () => {
      const filterIndices = [1, 2];
      const rowDB = [
        { data: [{ score: 0.01, value: 5 }, { score: 0.05, value: 15 }, { score: 0.01, value: 2.5 }] },
        { data: [{ score: 0.05, value: 2 }, { score: 0.02, value: 2 }, { score: 0.01, value: 10 }] },
        { data: [{ score: 0.15, value: 10 }, { score: 0, value: 25 }, { score: 0, value: 4 }] },
      ];
      const scoreType = 'lte';
      const startingOrder = [2, 0, 1];
      const latestValues = {
        minAbundance: 5,
        primaryFilter: 0.01,
      };
      const expected = [2, 1];
      expect(filterAndOrderRows(rowDB, startingOrder, filterIndices, scoreType, latestValues)).toEqual(expected);
    });

    it('should filter by criteria only when no column indices are supplied', () => {
      const filterIndices = [];
      const rowDB = [
        { data: [{ score: 0.01, value: 5 }, { score: 0.05, value: 15 }, { score: 0.01, value: 2.5 }] },
        { data: [{ score: 0.05, value: 2 }, { score: 0.02, value: 2 }, { score: 0.05, value: 10 }] },
        { data: [{ score: 0.15, value: 10 }, { score: 0, value: 25 }, { score: 0, value: 4 }] },
      ];
      const scoreType = 'lte';
      const startingOrder = [2, 0, 1];
      const latestValues = {
        minAbundance: 5,
        primaryFilter: 0.01,
      };
      const expected = [2, 0];
      expect(filterAndOrderRows(rowDB, startingOrder, filterIndices, scoreType, latestValues)).toEqual(expected);
    });
  });

  describe('find column indices', () => {
    it('should find indices of selected column names', () => {
      const columnNames = ['a', 'b', 'c', 'd'];
      const selectedColumns = ['a', 'c'];
      const expected = [0, 2];
      expect(findColumnIndices(columnNames, selectedColumns)).toEqual(expected);
    });
  });
});
