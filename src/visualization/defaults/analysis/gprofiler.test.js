import fillGprofiler, { defaultState } from './gprofiler';

describe('Fill gprofiler state', () => {
  it('should use default state unless key is defined on input state', () => {
    const fileGprofiler = {
      ordered: true,
      organism: 'mmusculus',
    };

    const expected = {
      ...defaultState,
      ...fileGprofiler,
    };
    expect(fillGprofiler(fileGprofiler)).toEqual(expected);
  });

  it('should return defaults when file-defined gprofiler variable is not an object', () => {
    const fileGprofiler = [];
    const expected = defaultState;
    expect(fillGprofiler(fileGprofiler)).toEqual(expected);
  });

  it('should return defaults when file-defined gprofiler variable undefined', () => {
    const expected = defaultState;
    expect(fillGprofiler()).toEqual(expected);
  });
});
