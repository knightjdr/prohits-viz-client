import searchLabels from './search-labels';

describe('Search scatter plot labels', () => {
  it('should return a single match', () => {
    const labels = ['a', 'ab', 'aab', 'bc'];
    const term = 'AAB';

    const expected = {
      labels: {
        aab: true,
      },
      match: true,
    };
    expect(searchLabels(labels, term)).toEqual(expected);
  });

  it('should return multiple matches', () => {
    const labels = ['a', 'ab', 'aab', 'bc'];
    const term = 'aB';

    const expected = {
      labels: {
        ab: true,
        aab: true,
      },
      match: true,
    };
    expect(searchLabels(labels, term)).toEqual(expected);
  });

  it('should return no matches', () => {
    const labels = ['a', 'ab', 'aab', 'bc'];
    const term = 'de';

    const expected = {
      labels: {},
      match: false,
    };
    expect(searchLabels(labels, term)).toEqual(expected);
  });
});
