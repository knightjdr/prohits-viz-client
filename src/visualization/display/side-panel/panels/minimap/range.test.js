import range from './range';

describe('Minimap range', () => {
  it('should define range for current view', () => {
    const dimensions = {
      columns: 50,
      pageX: 25,
      pageY: 25,
      rows: 50,
    };
    const position = {
      x: 12,
      y: 2,
    };
    const expected = {
      height: '50%',
      left: '24%',
      top: '4%',
      width: '50%',
    };
    expect(range(dimensions, position)).toEqual(expected);
  });
});
