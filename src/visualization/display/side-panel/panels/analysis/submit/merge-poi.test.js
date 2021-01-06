import mergePOI from './merge-poi';

describe('Merge points of interest', () => {
  it('should return empty array when no names supplied', () => {
    const names = {};
    const poi = {
      columns: [0, 2, 1],
      rows: [1, 2, 0],
    };
    const expected = [];
    expect(mergePOI(poi, names)).toEqual(expected);
  });

  it('should return an array of names defined by POI with no duplicates', () => {
    const names = {
      columns: ['a', 'b', 'c', 'd'],
      rows: ['e', 'b', 'f', 'g'],
    };
    const poi = {
      columns: [0, 2, 1],
      rows: [1, 3, 0],
    };
    const expected = ['a', 'c', 'b', 'g', 'e'];
    expect(mergePOI(poi, names)).toEqual(expected);
  });
});
