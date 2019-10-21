import parseIfJson from '../../utils/parse-if-json';
import readFile from '../../utils/read-file';
import readInteractiveFile from './read-interactive-file';

jest.mock('../../utils/parse-if-json');
jest.mock('../../utils/read-file');

describe('Read interactive file', () => {
  it('should throw an error when it cannot read the file', async () => {
    const err = new Error('Missing file');
    readFile.mockRejectedValue(err);
    await expect(readInteractiveFile('file')).rejects.toThrow(err);
  });

  it('should throw an error when the file is not json', async () => {
    readFile.mockResolvedValue(null);
    parseIfJson.mockReturnValue(false);
    const expected = 'Invalid file format';
    await expect(readInteractiveFile('file')).rejects.toThrow(expected);
  });

  it('should return file contents when valid', async () => {
    readFile.mockResolvedValue('{}');
    parseIfJson.mockReturnValue({});
    const expected = {};
    await expect(readInteractiveFile('file')).resolves.toEqual(expected);
  });
});
