import fillAnalysis from './analysis';

describe('Fill analysis state', () => {
  it('should use default state unless key is defined on input state', () => {
    const fileAnalysis = {
      'analysis-1': { processing: true, type: 'gprofiler' },
    };

    const expected = {
      'analysis-1': { processing: true, type: 'gprofiler' },
    };
    expect(fillAnalysis(fileAnalysis)).toEqual(expected);
  });

  it('should return defaults when file-defined analysis variable is not an object', () => {
    const fileAnalysis = [];
    const expected = {};
    expect(fillAnalysis(fileAnalysis)).toEqual(expected);
  });

  it('should return defaults when file-defined analysis variable undefined', () => {
    const expected = {};
    expect(fillAnalysis()).toEqual(expected);
  });
});
