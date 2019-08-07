import removeFileExt from './remove-file-ext';

describe('Remove file extension', () => {
  it('should remove extension', () => {
    const tests = [
      'file-name.json',
      'file.jpeg',
      'file.name.txt',
    ];
    const expected = [
      'file-name',
      'file',
      'file.name',
    ];
    tests.forEach((test, index) => {
      expect(removeFileExt(test)).toBe(expected[index]);
    });
  });
});
