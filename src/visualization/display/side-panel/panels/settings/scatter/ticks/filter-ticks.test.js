import filterTicks from './filter-ticks';

describe('Filter user input ticks', () => {
  it('should handle empty string', () => {
    const field = 'xTicks';
    const options = { logBase: 'none', logX: false, logY: false };
    const value = '';
    const expected = [];
    expect(filterTicks(field, value, options)).toEqual(expected);
  });

  it('should handle valid string of comma or whitespace separated ticks', () => {
    const field = 'xTicks';
    const options = { logBase: 'none', logX: false, logY: false };
    const value = '1, -2, 0, 0, a  5 3';
    const expected = [-2, 0, 1, 3, 5];
    expect(filterTicks(field, value, options)).toEqual(expected);
  });

  it('should remove zero value for log axes', () => {
    const field = 'xTicks';
    const options = { logBase: '2', logX: true, logY: false };
    const value = '1, -2, 0, 0, a  8 4';
    const expected = [-2, 1, 4, 8];
    expect(filterTicks(field, value, options)).toEqual(expected);
  });
});
