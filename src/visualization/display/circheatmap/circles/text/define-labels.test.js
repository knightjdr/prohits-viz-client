/* eslint-disable object-curly-newline */
import defineLabels from './define-labels';

jest.mock('../../../../../utils/text-size', () => () => 5);

describe('Define label parameters for circheatmap', () => {
  it('should return an array with parameters for each label', () => {
    const dimensions = { radius: 100, svgWidth: 200 };
    const segmentNames = ['a', 'b', 'c', 'd'];

    const expected = [
      { id: 'a', string: 'a', width: 5, x: 70.71068, y: 78.71068 },
      { id: 'b', string: 'b', width: 5, x: -70.71068, y: 78.71068 },
      { id: 'c', string: 'c', width: 5, x: -70.71068, y: -67.71068 },
      { id: 'd', string: 'd', width: 5, x: 70.71068, y: -83.71068 },
    ];
    expect(defineLabels(segmentNames, dimensions)).toEqual(expected);
  });
});
