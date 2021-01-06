import reorderPOI from './reorder-poi';

describe('Reorder POI options', () => {
  it('should move items up', () => {
    const currentOrder = [0, 1, 2, 3, 4];
    const direction = 'up';
    const highlighted = [1, 3];
    const expected = [1, 0, 3, 2, 4];
    expect(reorderPOI(direction, currentOrder, highlighted)).toEqual(expected);
  });

  it('should not move item up when it is a the limit', () => {
    const currentOrder = [1, 0, 2, 3, 4];
    const direction = 'up';
    const highlighted = [1, 3];
    const expected = [1, 0, 3, 2, 4];
    expect(reorderPOI(direction, currentOrder, highlighted)).toEqual(expected);
  });

  it('should move items down', () => {
    const currentOrder = [0, 1, 2, 3, 4];
    const direction = 'down';
    const highlighted = [1, 3];
    const expected = [0, 2, 1, 4, 3];
    expect(reorderPOI(direction, currentOrder, highlighted)).toEqual(expected);
  });

  it('should move item down when it is a the limit', () => {
    const currentOrder = [0, 1, 2, 4, 3];
    const direction = 'down';
    const highlighted = [1, 3];
    const expected = [0, 2, 1, 4, 3];
    expect(reorderPOI(direction, currentOrder, highlighted)).toEqual(expected);
  });
});
