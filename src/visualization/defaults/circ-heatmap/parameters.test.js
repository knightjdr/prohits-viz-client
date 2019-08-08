import fillParameters, { defaultState } from './parameters';

describe('Fill parameters', () => {
  it('should return user options when valid', () => {
    const parameters = {
      otherfield: 1,
    };
    const expected = {
      ...parameters,
      filename: 'file',
      imageType: 'circ-heatmap',
      taskID: 'task1',
    };
    expect(fillParameters(parameters, 'file', 'task1')).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const parameters = {};
    const expected = {
      ...defaultState,
      filename: 'file',
      imageType: 'circ-heatmap',
      taskID: 'task1',
    };
    expect(fillParameters(parameters, 'file', 'task1')).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = {
      ...defaultState,
      filename: 'file',
      imageType: 'circ-heatmap',
      taskID: 'task1',
    };
    expect(fillParameters(undefined, 'file', 'task1')).toEqual(expected);
  });
});
