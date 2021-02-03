import validateInteractiveFile from './validate-interactive-file';

describe('Validate interactive file', () => {
  it('should validate dotplot data', async () => {
    const data = {
      columnDB: ['a', 'b'],
      parameters: { imageType: 'dotplot' },
      rowDB: [{ data: [{ value: 1 }], name: 'test' }],
    };
    const blob = new Blob([JSON.stringify(data)]);
    const expected = data;
    const actual = await validateInteractiveFile(blob);
    expect(actual).toEqual(expected);
  });

  it('should valide heatmap data', async () => {
    const data = {
      columnDB: ['a', 'b'],
      parameters: { imageType: 'heatmap' },
      rowDB: [{ data: [{ value: 1 }], name: 'test' }],
    };
    const blob = new Blob([JSON.stringify(data)]);
    const expected = data;
    const actual = await validateInteractiveFile(blob);
    expect(actual).toEqual(expected);
  });
});
