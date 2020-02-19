import filterHeader from './filter-header';

// const other = ['column2', 'column3', 'column4'];

describe('Filter file header', () => {
  it('should return initial value and options', () => {
    const headers = ['column1', 'column2', 'column3', 'column4'];
    const recommended = ['column1'];

    const expected = {
      initialValue: 'column1',
      options: [
        { label: 'Suggested', optGroup: true },
        { label: 'column1', value: 'column1' },
        { label: 'Other', optGroup: true },
        { label: 'column2', value: 'column2' },
        { label: 'column3', value: 'column3' },
        { label: 'column4', value: 'column4' },
      ],
    };
    expect(filterHeader(recommended, headers)).toEqual(expected);
  });

  it('should return only "Other" group of options', () => {
    const headers = ['column1', 'column2', 'column3', 'column4'];
    const recommended = [];

    const expected = {
      initialValue: '',
      options: [
        { label: 'Other', optGroup: true },
        { label: 'column1', value: 'column1' },
        { label: 'column2', value: 'column2' },
        { label: 'column3', value: 'column3' },
        { label: 'column4', value: 'column4' },
      ],
    };
    expect(filterHeader(recommended, headers)).toEqual(expected);
  });

  it('should return only "Suggested" group of options', () => {
    const headers = ['column1', 'column2', 'column3', 'column4'];
    const recommended = ['column1', 'column2', 'column3', 'column4'];

    const expected = {
      initialValue: 'column1',
      options: [
        { label: 'Suggested', optGroup: true },
        { label: 'column1', value: 'column1' },
        { label: 'column2', value: 'column2' },
        { label: 'column3', value: 'column3' },
        { label: 'column4', value: 'column4' },
      ],
    };
    expect(filterHeader(recommended, headers)).toEqual(expected);
  });

  it('should return only "Other" group of options when not matches to recommended', () => {
    const headers = ['column1', 'column2', 'column3', 'column4'];
    const recommended = ['column5'];

    const expected = {
      initialValue: '',
      options: [
        { label: 'Other', optGroup: true },
        { label: 'column1', value: 'column1' },
        { label: 'column2', value: 'column2' },
        { label: 'column3', value: 'column3' },
        { label: 'column4', value: 'column4' },
      ],
    };
    expect(filterHeader(recommended, headers)).toEqual(expected);
  });
});
