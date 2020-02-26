import validateClusteringMetric from './clustering-metric';

describe('Validate clustering metric', () => {
  it('should validate acceptable metric', () => {
    const expected = [true, 'binary'];

    expect(validateClusteringMetric('binary')).toEqual(expected);
  });

  it('should invalidate unknown metric', () => {
    const expected = [false, null];

    expect(validateClusteringMetric('unknown')).toEqual(expected);
  });
});
