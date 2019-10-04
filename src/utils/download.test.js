import download from './download';

beforeAll(() => {
  jest.clearAllMocks();
});

describe('download', () => {
  let createEl;
  let createSpy;
  let clickSpy;
  let element;
  const expectedBlob = new Blob(['test'], { type: 'text/plain' });
  let revokeSpy;

  beforeAll(() => {
    // Mock document createElement.
    element = document.createElement('a');
    createEl = document.createElement;
    Object.defineProperty(document, 'createElement', {
      value: () => (element),
      writable: true,
    });

    // Create spies.
    createSpy = jest.spyOn(window.URL, 'createObjectURL');
    clickSpy = jest.spyOn(element, 'click');
    revokeSpy = jest.spyOn(window.URL, 'revokeObjectURL');

    // Call method and define expected result.
    download('test', 'test.txt', 'text/plain');
  });

  afterAll(() => {
    createSpy.mockRestore();
    clickSpy.mockRestore();
    revokeSpy.mockRestore();

    // Restore createElement;
    Object.defineProperty(document, 'createElement', {
      value: createEl,
    });
  });

  it('should create object url', () => {
    expect(createSpy).toHaveBeenCalledWith(expectedBlob);
  });

  it('should revoke object url', () => {
    expect(revokeSpy).toHaveBeenCalledWith(expectedBlob);
  });

  it('should create link', () => {
    expect(element.download).toBe('test.txt');
  });
});
