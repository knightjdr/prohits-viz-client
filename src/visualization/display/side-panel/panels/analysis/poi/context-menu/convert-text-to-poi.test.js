import convertTextToPOI from './convert-text-to-poi';

describe('Convert pasted text to POI indices', () => {
  it('should convert text to an array of valid indices', () => {
    const availableNames = ['a', 'b', 'c', 'd', 'e'];
    const currentOrder = [2, 3, 4];
    const text = 'a a f a';
    const expected = [2, 3, 4, 0];
    expect(convertTextToPOI(text, availableNames, currentOrder)).toEqual(expected);
  });
});
