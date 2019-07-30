import parseURI from './parse-uri';

describe('Parse URI for navbar', () => {
  it('should parse URI for home route', () => {
    expect(parseURI('/')).toEqual('home');
  });

  it('should parse URI for other route', () => {
    expect(parseURI('/analysis')).toEqual('analysis');
  });

  it('should parse URI for nested route', () => {
    expect(parseURI('/analysis/something')).toEqual('analysis');
  });

});
