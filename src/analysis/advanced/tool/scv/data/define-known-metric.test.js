import defineKnownMetric from './define-known-metric';

describe('Define known metric for circheatmap analysis', () => {
  it('should select metric depending on file type', () => {
    const tests = ['saint', 'crapome'];
    const knownMetric = '';

    const expected = ['interaction', 'interaction'];
    tests.forEach((test, index) => {
      expect(defineKnownMetric(test, knownMetric)).toBe(expected[index]);
    });
  });

  it('should not select a metric when one is already defined', () => {
    const fileType = 'saint';
    const knownMetric = 'interaction';

    const expected = '';
    expect(defineKnownMetric(fileType, knownMetric)).toBe(expected);
  });

  it('should not select a metric for unknown file type', () => {
    const fileType = 'other';
    const knownMetric = '';

    const expected = '';
    expect(defineKnownMetric(fileType, knownMetric)).toBe(expected);
  });
});
