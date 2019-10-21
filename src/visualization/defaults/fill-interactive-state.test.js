import fillInteractiveState from './fill-interactive-state';
import fillHeatmap from './heatmap/fill-heatmap';

jest.mock('./heatmap/fill-heatmap');
fillHeatmap.mockReturnValue({ type: 'heatmap' });

describe('Fill interactive state', () => {
  describe('dotplot', () => {
    const data = {
      parameters: { imageType: 'dotplot' },
    };
    let actual;

    beforeAll(() => {
      fillHeatmap.mockClear();
      actual = fillInteractiveState(data, 'name', 'task1');
    });

    it('should call heatmap for image type dotplot', () => {
      expect(fillHeatmap).toHaveBeenCalledWith(data, 'name', 'task1');
    });

    it('should return object', () => {
      expect(actual).toEqual({ type: 'heatmap' });
    });
  });

  describe('heatmap', () => {
    const data = {
      parameters: { imageType: 'heatmap' },
    };
    let actual;

    beforeAll(() => {
      fillHeatmap.mockClear();
      actual = fillInteractiveState(data, 'name', 'task1');
    });

    it('should call heatmap for image type heatmap', () => {
      expect(fillHeatmap).toHaveBeenCalledWith(data, 'name', 'task1');
    });

    it('should return data object', () => {
      expect(actual).toEqual({ type: 'heatmap' });
    });
  });

  describe('default', () => {
    const data = {
      parameters: { imageType: 'unknown' },
    };
    let actual;

    beforeAll(() => {
      fillHeatmap.mockClear();
      actual = fillInteractiveState(data, 'name', 'task1');
    });

    it('should not call heatmap for unknown image type', () => {
      expect(fillHeatmap).not.toHaveBeenCalled();
    });

    it('should return data object', () => {
      expect(actual).toEqual(data);
    });
  });
});
