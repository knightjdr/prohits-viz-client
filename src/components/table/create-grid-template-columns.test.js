import createGridColumnTemplate from './create-grid-template-columns';

describe('Create grid column template string', () => {
  it('should create a string from array of columns', () => {
    const columns = [
      { width: '150px' },
      {},
      { width: 'minmax(75px, 10%)' },
    ];
    const expected = '150px auto minmax(75px, 10%)';
    expect(createGridColumnTemplate(columns)).toEqual(expected);
  });
});
