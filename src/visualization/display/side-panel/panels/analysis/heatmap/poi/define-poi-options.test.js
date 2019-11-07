import definePoiOptions from './define-poi-options';

describe('Define POI option object', () => {
  it('should return an object with details about unselected options and POI', () => {
    const names = ['a', 'B', 'c', 'd', 'e'];
    const order = [2, 0, 3, 1];
    const poi = [3, 0];
    const expected = {
      names: ['a', 'b', 'c', 'd', 'e'],
      poi: [
        { index: 3, name: 'd' },
        { index: 0, name: 'a' },
      ],
      poiOrder: poi,
      unselected: [
        { index: 2, name: 'c' },
        { index: 1, name: 'B' },
      ],
      unselectedOrder: [2, 1],
    };
    expect(definePoiOptions(names, order, poi)).toEqual(expected);
  });
});
