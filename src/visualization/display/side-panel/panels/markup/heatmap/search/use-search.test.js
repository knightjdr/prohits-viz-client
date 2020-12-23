import {
  createRegex,
  findFirstMatches,
  findNewPosition,
  hasMatch,
  searchElements,
} from './use-search';

describe('Search heat map data', () => {
  describe('find matching entries', () => {
    it('should find matches', () => {
      const columns = ['a', 'aa', 'baa'];
      const rows = ['A', 'AA', 'BAA'];
      const re = createRegex('aa');

      const expected = {
        columns: {
          aa: 1,
          baa: 2,
        },
        rows: {
          AA: 1,
          BAA: 2,
        },
      };
      expect(searchElements(re, columns, rows)).toEqual(expected);
    });

    it('should find matches starting with regex', () => {
      const columns = ['a', 'aa', 'baa'];
      const rows = ['A', 'AA', 'BAA'];
      const re = createRegex('^aa');

      const expected = {
        columns: {
          aa: 1,
        },
        rows: {
          AA: 1,
        },
      };
      expect(searchElements(re, columns, rows)).toEqual(expected);
    });

    it('should find no matches', () => {
      const columns = ['a', 'aa', 'aab'];
      const rows = ['A', 'AA', 'AAB'];
      const re = createRegex('c');

      const expected = {
        columns: {},
        rows: {},
      };
      expect(searchElements(re, columns, rows)).toEqual(expected);
    });
  });

  describe('find index of first match', () => {
    it('should find indices >= 0 when there are matches', () => {
      const matches = {
        columns: {
          aa: 1,
          baa: 2,
        },
        rows: {
          AA: 1,
          BAA: 2,
        },
      };

      const expected = {
        column: 1,
        row: 1,
      };
      expect(findFirstMatches(matches)).toEqual(expected);
    });

    it('should return -1 when there is no match', () => {
      const matches = {
        columns: {
          aa: 1,
          baa: 2,
        },
        rows: {},
      };

      const expected = {
        column: 1,
        row: -1,
      };
      expect(findFirstMatches(matches)).toEqual(expected);
    });
  });

  describe('find new plot position', () => {
    it('should find new position when there is a match to both columns and rows', () => {
      const firstMatches = {
        column: 10,
        row: 15,
      };
      const dimensions = {
        columns: 50,
        pageX: 10,
        pageY: 20,
        rows: 100,
      };
      const position = {
        x: 2,
        y: 3,
      };

      const expected = {
        x: 10,
        y: 15,
      };
      expect(findNewPosition(firstMatches, position, dimensions)).toEqual(expected);
    });

    it('should find new position when there is a match to both columns and rows, but they are on the last page', () => {
      const firstMatches = {
        column: 41,
        row: 81,
      };
      const dimensions = {
        columns: 50,
        pageX: 10,
        pageY: 20,
        rows: 100,
      };
      const position = {
        x: 2,
        y: 3,
      };

      const expected = {
        x: 40,
        y: 80,
      };
      expect(findNewPosition(firstMatches, position, dimensions)).toEqual(expected);
    });

    it('should find new position when there is a match only to columns', () => {
      const firstMatches = {
        column: 10,
        row: -1,
      };
      const dimensions = {
        columns: 50,
        pageX: 10,
        pageY: 20,
        rows: 100,
      };
      const position = {
        x: 2,
        y: 3,
      };

      const expected = {
        x: 10,
        y: 3,
      };
      expect(findNewPosition(firstMatches, position, dimensions)).toEqual(expected);
    });

    it('should find new position when there is a match only to rows', () => {
      const firstMatches = {
        column: -1,
        row: 15,
      };
      const dimensions = {
        columns: 50,
        pageX: 10,
        pageY: 20,
        rows: 100,
      };
      const position = {
        x: 2,
        y: 3,
      };

      const expected = {
        x: 2,
        y: 15,
      };
      expect(findNewPosition(firstMatches, position, dimensions)).toEqual(expected);
    });

    it('should return current position when there is no match to columns or rows', () => {
      const firstMatches = {
        column: -1,
        row: -1,
      };
      const dimensions = {
        columns: 50,
        pageX: 10,
        pageY: 20,
        rows: 100,
      };
      const position = {
        x: 2,
        y: 3,
      };

      const expected = {
        x: 2,
        y: 3,
      };
      expect(findNewPosition(firstMatches, position, dimensions)).toEqual(expected);
    });
  });

  describe('has match', () => {
    it('should return true when there is a match to columns and rows', () => {
      const firstMatches = {
        column: 10,
        row: 15,
      };
      expect(hasMatch(firstMatches)).toBeTruthy();
    });

    it('should return true when there is a match to columns', () => {
      const firstMatches = {
        column: 10,
        row: -1,
      };
      expect(hasMatch(firstMatches)).toBeTruthy();
    });

    it('should return true when there is a match to rows', () => {
      const firstMatches = {
        column: -1,
        row: 15,
      };
      expect(hasMatch(firstMatches)).toBeTruthy();
    });

    it('should return false when there is no match', () => {
      const firstMatches = {
        column: -1,
        row: -1,
      };
      expect(hasMatch(firstMatches)).toBeFalsy();
    });
  });
});
