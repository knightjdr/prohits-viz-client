import getLabelsToShow from './get-labels-to-show';

describe('Get labels to show on circheatmap', () => {
  it('should return an array of labels', () => {
    const labels = [
      { string: 'a' },
      { string: 'b' },
      { string: 'c' },
      { string: 'd' },
      { string: 'eb' },
      { string: 'f' },
    ];
    const searchLabels = { b: true, eb: true };
    const selectedLabels = { c: true };

    const expected = [
      { string: 'b', style: { fontWeight: 'bold' } },
      { string: 'c' },
      { string: 'eb', style: { fontWeight: 'bold' } },
    ];
    expect(getLabelsToShow(labels, searchLabels, selectedLabels)).toEqual(expected);
  });
});
