import interactiveFile from './validate-interactive-file';

jest.mock('comlink');

describe('Validate interactive file', () => {
  it('should validate dotplot data', async () => {
    const data = {
      columnDB: ['a', 'b'],
      parameters: { imageType: 'dotplot' },
      rowDB: [{ data: [{ value: 1 }], name: 'test' }],
    };
    const blob = new Blob([JSON.stringify(data)]);
    const expected = data;
    await interactiveFile.run(blob);
    expect(interactiveFile.data).toEqual(expected);
  });

  it('should validate heatmap data', async () => {
    const data = {
      columnDB: ['a', 'b'],
      parameters: { imageType: 'heatmap' },
      rowDB: [{ data: [{ value: 1 }], name: 'test' }],
    };
    const blob = new Blob([JSON.stringify(data)]);
    const expected = data;
    await interactiveFile.run(blob);
    expect(interactiveFile.data).toEqual(expected);
  });
});
