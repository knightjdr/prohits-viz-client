import fillMap, { defaultState } from './minimap';
import validateUri from '../../../utils/validate-uri';

jest.mock('../../../utils/validate-uri');

describe('Fill minimap', () => {
  it('should return user-defined minimap when valid', () => {
    validateUri.mockReturnValue(true);
    const userMinimap = {
      main: {
        image: 'image',
        needSyncing: true,
        syncedImage: 'image',
      },
    };
    const expected = {
      main: {
        ...defaultState,
        ...userMinimap.main,
      },
    };
    expect(fillMap(userMinimap)).toEqual(expected);
  });

  it('should return defaults when user-defined minimap options invalid', () => {
    validateUri.mockReturnValue(false);
    const userMinimap = {
      main: {
        image: 'image',
        needSyncing: 'true',
        syncedImage: 'image',
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillMap(userMinimap)).toEqual(expected);
  });

  it('should return syncing is needed when an image is missing', () => {
    validateUri.mockReturnValue(false);
    const userMinimap = {
      main: {
        image: null,
        needSyncing: false,
        syncedImage: null,
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillMap(userMinimap)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const userMinimap = {};
    const expected = {
      main: defaultState,
    };
    expect(fillMap(userMinimap)).toEqual(expected);
  });

  it('should return defaults when user-defined minimap is not an object', () => {
    const userMinimap = [];
    const expected = {
      main: defaultState,
    };
    expect(fillMap(userMinimap)).toEqual(expected);
  });

  it('should return defaults when user-defined minimap undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillMap(undefined)).toEqual(expected);
  });
});
