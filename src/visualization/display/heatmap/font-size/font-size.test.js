import fontSize from './font-size';

describe('Calculate font size', () => {
  it('should set fontsize based on cellsize argument', () => {
    expect(fontSize(10)).toBe(6);
  });
});
