import copyOptions from './copy-options';
import copyToClipboard from '../../../../../../../../utils/copy-to-clipboard';

jest.mock('../../../../../../../../utils/copy-to-clipboard');

describe('Copy option text to clipboard', () => {
  it('should not copy if there are no options', () => {
    copyToClipboard.mockClear();
    const options = [];
    copyOptions(options);
    expect(copyToClipboard).not.toHaveBeenCalled();
  });

  it('should copy array of strings', () => {
    copyToClipboard.mockClear();
    const options = ['a', 'b', 'c'];
    const expected = 'a\r\nb\r\nc';
    copyOptions(options);
    expect(copyToClipboard).toHaveBeenCalledWith(expected);
  });

  it('should copy array of object', () => {
    copyToClipboard.mockClear();
    const options = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
    const expected = 'a\r\nb\r\nc';
    copyOptions(options);
    expect(copyToClipboard).toHaveBeenCalledWith(expected);
  });
});
