import ConvertCamel from './convert-camel';

test('camel case strings should convert to space', () => {
  expect(ConvertCamel('test')).toBe('test');
  expect(ConvertCamel('testOne')).toBe('test one');
  expect(ConvertCamel('testOneTwo')).toBe('test one two');
});
