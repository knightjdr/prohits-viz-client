import fillParameters, { defaultState } from './parameters';

describe('Fill parameters', () => {
  it('should return user options when valid', () => {
    const parameters = {
      abundanceColumn: 'Spectral count',
      scoreColumn: 'FDR',
      scoreType: 'gte',
      otherfield: 1,
    };
    const expected = {
      ...parameters,
      filename: 'file',
      imageType: 'dotplot',
      taskID: 'task1',
    };
    expect(fillParameters(parameters, 'file', 'task1', 'dotplot')).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const parameters = {
      abundanceColumn: 51,
      scoreColumn: 1,
      scoreType: 'greater than',
    };
    const expected = {
      ...defaultState,
      filename: 'file',
      imageType: 'dotplot',
      taskID: 'task1',
    };
    expect(fillParameters(parameters, 'file', 'task1', 'dotplot')).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const parameters = {};
    const expected = {
      ...defaultState,
      filename: 'file',
      imageType: 'dotplot',
      taskID: 'task1',
    };
    expect(fillParameters(parameters, 'file', 'task1', 'dotplot')).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = {
      ...defaultState,
      filename: 'file',
      imageType: 'dotplot',
      taskID: 'task1',
    };
    expect(fillParameters(undefined, 'file', 'task1', 'dotplot')).toEqual(expected);
  });
});
