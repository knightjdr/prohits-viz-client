import getPointsPassingFC from './get-points-passing-fc';

describe('Get points passing fold change on scatter plot', () => {
  it('should get indices of points passing positive fold change cutoff', () => {
    const fc = 2;
    const points = [
      { label: 'a', x: 1, y: 2 },
      { label: 'b', x: 2, y: 1 },
      { label: 'c', x: 1, y: 1.5 },
      { label: 'd', x: 1, y: 1 },
      { label: 'e', x: 1, y: 3 },
      { label: 'f', x: 5, y: 1 },
    ];
    const expected = [1, 5];
    expect(getPointsPassingFC(fc, points)).toEqual(expected);
  });

  it('should get indices of points passing negative fold change cutoff', () => {
    const fc = -2;
    const points = [
      { label: 'a', x: 1, y: 2 },
      { label: 'b', x: 2, y: 1 },
      { label: 'c', x: 1, y: 1.5 },
      { label: 'd', x: 1, y: 1 },
      { label: 'e', x: 1, y: 3 },
      { label: 'f', x: 5, y: 1 },
    ];
    const expected = [0, 4];
    expect(getPointsPassingFC(fc, points)).toEqual(expected);
  });

  it('should return an empty array when nothing passes cutoff', () => {
    const fc = 6;
    const points = [
      { label: 'a', x: 1, y: 2 },
      { label: 'b', x: 2, y: 1 },
      { label: 'c', x: 1, y: 1.5 },
      { label: 'd', x: 1, y: 1 },
      { label: 'e', x: 1, y: 3 },
      { label: 'f', x: 5, y: 1 },
    ];
    const expected = [];
    expect(getPointsPassingFC(fc, points)).toEqual(expected);
  });
});
