import fillParameters, { defaultState, validateScoreType } from './parameters';

describe('Validate score type', () => {
  it('should return valid score type "lte"', () => {
    expect(validateScoreType('lte')).toBe('lte');
  });

  it('should return valid score type "gte"', () => {
    expect(validateScoreType('gte')).toBe('gte');
  });

  it('should return default score type when invalid', () => {
    expect(validateScoreType('invalid')).toBe('lte');
  });
});

describe('Fill parameters', () => {
  it('should return user options when valid', () => {
    const parameters = {
      scoreType: 'gte',
      otherfield: 1,
    };
    const expected = {
      ...parameters,
      filename: 'file',
      taskID: 'task1',
    };
    expect(fillParameters(parameters, 'file', 'task1')).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const parameters = {
      scoreType: 'greater than',
    };
    const expected = {
      ...defaultState,
      filename: 'file',
      taskID: 'task1',
    };
    expect(fillParameters(parameters, 'file', 'task1')).toEqual(expected);
  });
});
