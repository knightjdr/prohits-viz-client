import filterPoints from './points-helpers';

describe('Points helpers', () => {
  it('should filter points by both axes (strict)', () => {
    const filters = {
      strictAxisFiltering: true,
      x: 5,
      y: 10,
    };
    const points = [
      { label: 'a', x: 5, y: 10 },
      { label: 'b', x: 5, y: 9.9 },
      { label: 'c', x: 4.0, y: 10 },
      { label: 'd', x: 7, y: 100 },
    ];

    const expected = [
      { label: 'a', x: 5, y: 10 },
      { label: 'd', x: 7, y: 100 },
    ];
    expect(filterPoints(points, filters)).toEqual(expected);
  });

  it('should filter points by one axes only', () => {
    const filters = {
      strictAxisFiltering: false,
      x: 5,
      y: 10,
    };
    const points = [
      { label: 'a', x: 5, y: 10 },
      { label: 'b', x: 5, y: 9.9 },
      { label: 'c', x: 4.0, y: 10 },
      { label: 'd', x: 7, y: 100 },
      { label: 'e', x: 4, y: 9 },
    ];

    const expected = [
      { label: 'a', x: 5, y: 10 },
      { label: 'b', x: 5, y: 9.9 },
      { label: 'c', x: 4.0, y: 10 },
      { label: 'd', x: 7, y: 100 },
    ];
    expect(filterPoints(points, filters)).toEqual(expected);
  });
});
