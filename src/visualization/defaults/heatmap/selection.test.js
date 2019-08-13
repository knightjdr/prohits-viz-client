import fillSelection from './selection';
import mapArr from '../../../utils/map-array';

jest.mock('../../../utils/map-array');

const columns = {
  names: ['a', 'b', 'c'],
};
const rows = {
  list: [
    { name: 'x' },
    { name: 'y' },
    { name: 'z' },
  ],
};

const expected = {
  columnMap: { a: 0, b: 1, c: 2 },
  columns: ['a', 'b', 'c'],
  columnsSelected: [],
  rowMap: { x: 0, y: 1, z: 2 },
  rows: ['x', 'y', 'z'],
  rowsSelected: [],
};

describe('Fill selection', () => {
  it('should generate column and row values when gene object is undefined', () => {
    mapArr.mockReturnValueOnce({ a: 0, b: 1, c: 2 });
    mapArr.mockReturnValueOnce({ x: 0, y: 1, z: 2 });
    expect(fillSelection(undefined, columns, rows)).toEqual(expected);
  });

  describe('columns', () => {
    beforeAll(() => {
      mapArr.mockReturnValue({ a: 0, b: 1, c: 2 });
    });

    it('should return user input when valid', () => {
      const selection = expected;
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate column values when columns value is not an array', () => {
      const selection = {
        ...expected,
        columns: {},
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate column values when columnMap is not an object', () => {
      const selection = {
        ...expected,
        columnMap: [],
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate column values when columnMap does not match columns', () => {
      const selection = {
        ...expected,
        columnMap: { a: 0, b: 1, d: 2 },
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate column values when columnsSelected is not an array', () => {
      const selection = {
        ...expected,
        columnsSelected: {},
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate column values when columnsSelected values are not found in columns', () => {
      const selection = {
        ...expected,
        columnsSelected: ['d'],
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });
  });

  describe('rows', () => {
    beforeAll(() => {
      mapArr.mockReturnValue({ x: 0, y: 1, z: 2 });
    });

    it('should return user input when valid', () => {
      const selection = expected;
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate row values when rows value is not an array', () => {
      const selection = {
        ...expected,
        rows: {},
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate row values when rowMap is not an object', () => {
      const selection = {
        ...expected,
        rowMap: [],
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate row values when rowMap does not match columns', () => {
      const selection = {
        ...expected,
        rowMap: { x: 0, y: 1, d: 2 },
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate row values when rowsSelected is not an array', () => {
      const selection = {
        ...expected,
        rowsSelected: {},
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });

    it('should generate row values when rowSelected values are not found in columns', () => {
      const selection = {
        ...expected,
        rowsSelected: ['d'],
      };
      expect(fillSelection(selection, columns, rows)).toEqual(expected);
    });
  });
});
