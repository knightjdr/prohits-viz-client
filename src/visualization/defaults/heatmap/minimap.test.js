import fillMap, { defaultState } from './minimap';
import validateUri from '../../../utils/validate-uri';

jest.mock('../../../utils/validate-uri');

describe('Fill minimap', () => {
  it('should return user options when valid', () => {
    validateUri.mockReturnValue(true);
    const minimap = {
      image: 'image',
      needSyncing: true,
      syncedImage: 'image',
    };
    const expected = {
      ...defaultState,
      ...minimap,
    };
    expect(fillMap(minimap)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    validateUri.mockReturnValue(false);
    const minimap = {
      image: 'image',
      needSyncing: 'true',
      syncedImage: 'image',
    };
    const expected = defaultState;
    expect(fillMap(minimap)).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const minimap = {};
    const expected = defaultState;
    expect(fillMap(minimap)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = defaultState;
    expect(fillMap(undefined)).toEqual(expected);
  });
});
