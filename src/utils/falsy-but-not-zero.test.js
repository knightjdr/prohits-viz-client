import isFalsyButNotZero from './falsy-but-not-zero';

describe('Falsy but not zero', () => {
  it('should return true', () => {
    const tests = [false, null, undefined, ''];
    tests.forEach((test) => {
      expect(isFalsyButNotZero(test)).toBeTruthy();
    });
  });

  it('should return false', () => {
    const tests = [0, 3, 'test', [], {}];
    tests.forEach((test) => {
      expect(isFalsyButNotZero(test)).toBeFalsy();
    });
  });
});
