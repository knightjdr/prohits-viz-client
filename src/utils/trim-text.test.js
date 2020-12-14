import trimText from './trim-text';

/* Mock createElement('canvas'). I'm mocking the measureText
** function to just return the string length. */
Object.defineProperty(document, 'createElement', {
  value: () => ({
    getContext: () => ({
      measureText: (text) => ({
        width: text.length,
      }),
    }),
  }),
});

describe('Trim text', () => {
  it('should not trim text that is less than width', () => {
    const expected = {
      original: 'test',
      text: 'test',
      trimmed: false,
    };
    expect(trimText('test')).toEqual(expected);
  });

  it('should trim text that is greater than width', () => {
    const expected = {
      original: 'testtesttest',
      text: 'testtes...',
      trimmed: true,
    };
    expect(trimText('testtesttest', 'font', '12px', 10)).toEqual(expected);
  });
});
