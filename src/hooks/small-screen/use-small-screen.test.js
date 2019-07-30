import debounce from '../../utils/debounce';
import useSmallScreen from './use-small-screen';
import { act, renderHook } from '../../test-utils/test-hook';

jest.mock('../../utils/debounce');
debounce.mockImplementation(func => () => { func(); });

let isSmallScreen;
beforeAll(() => {
  renderHook(() => {
    isSmallScreen = useSmallScreen();
  });
});

describe('Use small screen hook', () => {
  it('should return false initially (JSDOM width is 1024)', () => {
    expect(isSmallScreen).toBeFalsy();
  });

  it('should return true when window resizes to less than boundary of 800', () => {
    act(() => {
      global.innerWidth = 799;
      global.dispatchEvent(new Event('resize'));
    });
    expect(isSmallScreen).toBeTruthy();
  });

  it('should return false when window resizes to more than boundary of 800 (inclusive)', () => {
    act(() => {
      global.innerWidth = 800;
      global.dispatchEvent(new Event('resize'));
    });
    expect(isSmallScreen).toBeFalsy();
  });
});
