import validateUri from './validate-uri';

describe('Validate PNG uri', () => {
  it('should return true for valid uris', () => {
    expect(validateUri('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD')).toBeTruthy();
    expect(validateUri('data:image/png,iVBORw0KGgoAAAANSUhEUgAAAD')).toBeTruthy();
  });

  it('should return false for invalid uris', () => {
    // Typo in data:image
    expect(validateUri('data:imae/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD')).toBeFalsy();
    // JPGs are not valid.
    expect(validateUri('data:image/jpg,iVBORw0KGgoAAAANSUhEUgAAAD')).toBeFalsy();
  });
});
