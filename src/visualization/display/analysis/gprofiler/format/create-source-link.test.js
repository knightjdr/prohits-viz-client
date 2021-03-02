import createSourceLink from './create-source-link';

jest.mock('../../../../../components/link/text/link');

describe('Create gProfiler source link', () => {
  it('should return ID only when url is not defined', () => {
    const id = 'SOURCE:1234';
    const url = null;
    const expected = id;
    expect(createSourceLink(id, url)).toBe(expected);
  });

  describe('Link', () => {
    let element;

    beforeAll(() => {
      const id = 'SOURCE:1234';
      const url = 'https://test-site.org';
      element = createSourceLink(id, url);
    });

    it('should return element with url as href', () => {
      expect(element.props.to).toBe('https://test-site.org');
    });

    it('should return element with ID as children', () => {
      expect(element.props.children).toBe('SOURCE:1234');
    });
  });
});
