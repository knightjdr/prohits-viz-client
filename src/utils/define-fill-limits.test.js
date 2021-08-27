import defineFillLimits from './define-fill-limits';

describe('Define fill limits', () => {
  it('should define limits for bidirectional abundance type', () => {
    const abundanceCap = 50;
    const abundanceType = 'bidirectional';
    const minAbundance = 0;
    const expected = {
      max: 50,
      min: -50,
    };
    expect(defineFillLimits(abundanceType, minAbundance, abundanceCap)).toEqual(expected);
  });

  it('should define limits for negative abundance type', () => {
    const abundanceCap = 50;
    const abundanceType = 'negative';
    const minAbundance = -0;
    const expected = {
      max: 0,
      min: -50,
    };
    expect(defineFillLimits(abundanceType, minAbundance, abundanceCap)).toEqual(expected);
  });

  it('should define limits for positive abundance type', () => {
    const abundanceCap = 50;
    const abundanceType = 'positive';
    const minAbundance = 0;
    const expected = {
      max: 50,
      min: 0,
    };
    expect(defineFillLimits(abundanceType, minAbundance, abundanceCap)).toEqual(expected);
  });
});
