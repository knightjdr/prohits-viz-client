import calculateRadii from './calculate-radii';

describe('Calculate circle radius for circheatmap', () => {
  it('should return inner and outer radius', () => {
    const radius = 100;
    const thickness = 20;

    const expected = {
      inner: 80,
      outer: 100,
    };
    expect(calculateRadii(radius, thickness)).toEqual(expected);
  });
});
