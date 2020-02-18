import TextEnconding from './text-encoding/encoding';
import ReadFileLines from './read-file-lines';

afterAll(() => {
  jest.clearAllMocks();
});

describe('ReadFileLines', () => {
  it('should reject with no input types', () => {
    const expected = new Error('Invalid function args');
    return expect(ReadFileLines()).rejects.toEqual(expected);
  });

  it('should reject with invalid file arguments', () => {
    const expected = new Error('Invalid function args');
    return expect(ReadFileLines('a')).rejects.toEqual(expected);
  });

  it('should reject when there is less than one line', () => {
    const file = new File(['col1\tcol2\na\tb\n'], 'filename.txt', { type: 'text/plain' });

    const expected = new Error('Invalid function args');
    return expect(ReadFileLines(file, 0)).rejects.toEqual(expected);
  });

  it('should reader header for CSV file', () => {
    const file = new File(['col1,col2\na,b\n'], 'filename.csv', { type: 'text/csv' });

    const expected = 'col1,col2';
    return expect(ReadFileLines(file, 1)).resolves.toEqual(expected);
  });

  it('should reader header for TSV file', () => {
    const file = new File(['col1\tcol2\na\tb\n'], 'filename.tsv', { type: 'text/tab-separated-values' });

    const expected = 'col1\tcol2';
    return expect(ReadFileLines(file, 1)).resolves.toEqual(expected);
  });

  it('should reader header for TXT file', () => {
    const file = new File(['col1\tcol2\na\tb\n'], 'filename.txt', { type: 'text/plain' });

    const expected = 'col1\tcol2';
    return expect(ReadFileLines(file, 1)).resolves.toEqual(expected);
  });

  it('should reader two lines for TXT file', () => {
    const file = new File(['col1\tcol2\na\tb\n'], 'filename.txt', { type: 'text/plain' });

    const expected = ['col1\tcol2', 'a\tb'];
    return expect(ReadFileLines(file, 2)).resolves.toEqual(expected);
  });

  it('should handle windows newlines', () => {
    const file = new File(['col1\tcol2\r\na\tb\n'], 'filename.txt', { type: 'text/plain' });

    const expected = 'col1\tcol2';
    return expect(ReadFileLines(file, 1)).resolves.toEqual(expected);
  });

  it('should return all lines when asking for more than what is in file', () => {
    const file = new File(['col1\tcol2\na\tb\n'], 'filename.txt', { type: 'text/plain' });

    const expected = ['col1\tcol2', 'a\tb'];
    return expect(ReadFileLines(file, 3)).resolves.toEqual(expected);
  });

  it('should return one line when decoder reads more than one', () => {
    TextEnconding.TextDecoder = jest.fn().mockImplementation(() => (
      {
        decode: () => ('col1\tcol2\na\tb\n1\t2'),
      }
    ));
    const file = new File(['col1\tcol2\na\tb\n'], 'filename.txt', { type: 'text/plain' });

    const expected = 'col1\tcol2';
    return expect(ReadFileLines(file, 1)).resolves.toEqual(expected);
  });

  it('should reject when FileReader errors', () => {
    window.FileReader = jest.fn().mockImplementation(() => (
      {
        readAsArrayBuffer: function RAAB() { this.onerror(new Error('FileReader error')); },
      }
    ));
    const file = new File(['col1\tcol2\na\tb\n'], 'filename.txt', { type: 'text/plain' });

    const expected = new Error('FileReader error');
    return expect(ReadFileLines(file, 1)).rejects.toEqual(expected);
  });
});
