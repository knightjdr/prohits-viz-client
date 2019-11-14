import calculateElementPosition from './calculate-element-position';

describe('Set nav-control position', () => {
  it('should have correction position when horizontal', () => {
    const expected = {
      bottom: 33,
      right: 210,
      transform: 'rotate(-90deg)',
    };
    expect(calculateElementPosition('horizontal', null, null, 500, 1000)).toEqual(expected);
  });

  describe('when vertical', () => {
    it('should have correction position when vertical without offset', () => {
      const expected = {
        bottom: 0,
        right: 170,
        transform: null,
      };
      expect(calculateElementPosition('vertical', 400, 500, 500, 1000)).toEqual(expected);
    });

    it('should have correction position when vertical with offset', () => {
      const expected = {
        bottom: 30,
        right: 170,
        transform: null,
      };
      expect(calculateElementPosition('vertical', 400, 500, 500, 1000, true)).toEqual(expected);
    });
  });
});
