import defineNewPOI from './define-new-poi';

describe('Define new POI', () => {
  it('should append highlighted points to POI when source is "unselected" array', () => {
    const currentPOI = [0, 1];
    const highlighted = [3, 4];
    const source = 'unselected';
    const expected = [0, 1, 3, 4];
    expect(defineNewPOI(source, currentPOI, highlighted)).toEqual(expected);
  });

  it('should remove highlighted points from POI when source is not "unselected" array', () => {
    const currentPOI = [0, 1, 3, 4];
    const highlighted = [1, 4];
    const source = 'poi';
    const expected = [0, 3];
    expect(defineNewPOI(source, currentPOI, highlighted)).toEqual(expected);
  });
});
