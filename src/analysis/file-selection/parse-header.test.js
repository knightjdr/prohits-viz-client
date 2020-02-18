import readFileLines from '../../utils/read-file-lines';
import parseHeader from './parse-header';

jest.mock('../../utils/read-file-lines');

describe('Parse header', () => {
  it('should return header', async () => {
    readFileLines.mockResolvedValue('column1\tcolumn2\tcolumn3');

    const file = { type: 'text/plain' };

    const expected = ['column1', 'column2', 'column3'];
    const header = await parseHeader(file);
    expect(header).toEqual(expected);
  });

  it('should return empty array when error reading file', async () => {
    const err = new Error('test error');
    readFileLines.mockRejectedValue(err);

    const file = { type: 'text/plain' };

    const expected = [];
    const header = await parseHeader(file);
    expect(header).toEqual(expected);
  });
});
