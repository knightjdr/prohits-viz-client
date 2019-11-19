import sortRows from './sort-rows';

const sortBySciNotation = (a, b) => Number.parseFloat(a.content) - Number.parseFloat(b.content);

describe('Sort table rows', () => {
  describe('defined sort function', () => {
    it('should sort rows in the ascending direction', () => {
      const header = [
        {
          sort: sortBySciNotation,
          sortKey: 'a',
        },
      ];
      const rows = [
        {
          a: { content: '1.45e-3' },
        },
        {
          a: { content: '6.73e+2' },
        },
        {
          a: { content: '2.41e-3' },
        },
      ];
      const sortField = 'a';
      const sortDirection = 'ascending';

      const expected = [
        { a: { content: '1.45e-3' } },
        { a: { content: '2.41e-3' } },
        { a: { content: '6.73e+2' } },
      ];
      expect(sortRows(rows, sortField, sortDirection, header)).toEqual(expected);
    });

    it('should sort rows in the descending direction', () => {
      const header = [
        {
          sort: sortBySciNotation,
          sortKey: 'a',
        },
      ];
      const rows = [
        { a: { content: '1.45e-3' } },
        { a: { content: '6.73e+2' } },
        { a: { content: '2.41e-3' } },
      ];
      const sortField = 'a';
      const sortDirection = 'ascending';

      const expected = [
        { a: { content: '1.45e-3' } },
        { a: { content: '2.41e-3' } },
        { a: { content: '6.73e+2' } },
      ];
      expect(sortRows(rows, sortField, sortDirection, header)).toEqual(expected);
    });
  });

  describe('undefined sort function', () => {
    it('should sort rows when no sort function is supplied', () => {
      const header = [
        {
          sortKey: 'a',
        },
      ];
      const rows = [
        { a: { content: 0.00145 } },
        { a: { content: 673 } },
        { a: { content: 0.00243 } },
      ];
      const sortField = 'a';
      const sortDirection = 'ascending';

      const expected = [
        { a: { content: 0.00145 } },
        { a: { content: 0.00243 } },
        { a: { content: 673 } },
      ];
      expect(sortRows(rows, sortField, sortDirection, header)).toEqual(expected);
    });

    it('should not sorts rows when header field cannot be found', () => {
      const header = [
        {
          sortKey: 'a',
        },
      ];
      const rows = [
        { a: { content: 0.00145 } },
        { a: { content: 673 } },
        { a: { content: 0.00243 } },
      ];
      const sortField = 'b';
      const sortDirection = 'ascending';

      const expected = [
        { a: { content: 0.00145 } },
        { a: { content: 673 } },
        { a: { content: 0.00243 } },
      ];
      expect(sortRows(rows, sortField, sortDirection, header)).toEqual(expected);
    });
  });
});
