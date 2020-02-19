import convertToOptions from './convert-to-options';

describe('Convert header columns to option array', () => {
  it('should return suggested and other options', () => {
    const other = ['column3', 'column4'];
    const suggested = ['column1', 'column2'];

    const expected = [
      { label: 'Suggested', optGroup: true },
      { label: 'column1', value: 'column1' },
      { label: 'column2', value: 'column2' },
      { label: 'Other', optGroup: true },
      { label: 'column3', value: 'column3' },
      { label: 'column4', value: 'column4' },
    ];

    expect(convertToOptions(suggested, other)).toEqual(expected);
  });

  it('should only return other components', () => {
    const other = ['column3', 'column4'];
    const suggested = [];

    const expected = [
      { label: 'Other', optGroup: true },
      { label: 'column3', value: 'column3' },
      { label: 'column4', value: 'column4' },
    ];

    expect(convertToOptions(suggested, other)).toEqual(expected);
  });

  it('should only return suggested options', () => {
    const other = [];
    const suggested = ['column1', 'column2'];

    const expected = [
      { label: 'Suggested', optGroup: true },
      { label: 'column1', value: 'column1' },
      { label: 'column2', value: 'column2' },
    ];

    expect(convertToOptions(suggested, other)).toEqual(expected);
  });
});
