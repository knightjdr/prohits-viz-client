import debounce from '../../utils/debounce';
import useWindowDimension from './use-window-dimension';
import { act, renderHook } from '../../test-utils/test-hook';

jest.mock('../../utils/debounce');
debounce.mockImplementation((func) => () => { func(); });

const renderHookForTest = () => {
  let dimensions;
  renderHook(() => {
    dimensions = useWindowDimension(0);
  });
  return dimensions;
};

describe('Use window dimensions hook', () => {
  it('should return window size', () => {
    // JSDOM defaults are 1024 x 768
    const expected = {
      height: 768,
      width: 1024,
    };
    expect(renderHookForTest()).toEqual(expected);
  });

  it('should return current window size on resize', () => {
    act(() => {
      global.innerHeight = 500;
      global.innerWidth = 800;
      global.dispatchEvent(new Event('resize'));
    });
    const expected = {
      height: 500,
      width: 800,
    };
    expect(renderHookForTest()).toEqual(expected);
  });
});
