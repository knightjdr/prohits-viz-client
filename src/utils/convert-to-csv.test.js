import convertToCsv from './convert-to-csv';

describe('Convert to CSV', () => {
  describe('table', () => {
    const header = ['b', 'c', 'a'];
    const order = [1, 2, 0];
    const rows = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    it('should convert a table to CSV', () => {
      const csv = 'b,c,a\n2,3,1\n5,6,4\n8,9,7';
      expect(convertToCsv(header, order, rows)).toBe(csv);
    });

    it('should convert a table to TSV', () => {
      const csv = 'b\tc\ta\n2\t3\t1\n5\t6\t4\n8\t9\t7';
      expect(convertToCsv(header, order, rows, '\t')).toBe(csv);
    });
  });

  describe('array of objects', () => {
    const header = ['b', 'c', 'a'];
    const order = ['bkey', 'ckey', 'akey'];
    const rows = [
      { akey: 1, bkey: 2, ckey: 3 },
      { akey: 4, bkey: 5, ckey: 6 },
      { akey: 7, bkey: 8, ckey: 9 },
    ];

    it('should convert a table to CSV', () => {
      const csv = 'b,c,a\n2,3,1\n5,6,4\n8,9,7';
      expect(convertToCsv(header, order, rows)).toBe(csv);
    });
  });
});
