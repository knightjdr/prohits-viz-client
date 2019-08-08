import circHeatmap from './circ-heatmap/fill';
import fill from './fill';
import heatmap from './heatmap/fill';

jest.mock('./circ-heatmap/fill');
circHeatmap.mockReturnValue({ type: 'circ-heatmap' });
jest.mock('./heatmap/fill');
heatmap.mockReturnValue({ type: 'heatmap' });

describe('Fill', () => {
  describe('circ heatmap', () => {
    const file = {
      parameters: { imageType: 'circ-heatmap' },
    };
    let returned;

    beforeAll(() => {
      circHeatmap.mockClear();
      returned = fill(file, 'name', 'task1');
    });

    it('should call circHeatmap for image type circ-heatmap', () => {
      expect(circHeatmap).toHaveBeenCalledWith(file, 'name', 'task1');
    });

    it('should return object', () => {
      expect(returned).toEqual({ type: 'circ-heatmap' });
    });
  });

  describe('dotplot', () => {
    const file = {
      parameters: { imageType: 'dotplot' },
    };
    let returned;

    beforeAll(() => {
      heatmap.mockClear();
      returned = fill(file, 'name', 'task1');
    });

    it('should call heatmap for image type dotplot', () => {
      expect(heatmap).toHaveBeenCalledWith(file, 'name', 'task1', 'dotplot');
    });

    it('should return object', () => {
      expect(returned).toEqual({ type: 'heatmap' });
    });
  });

  describe('heatmap', () => {
    const file = {
      parameters: { imageType: 'heatmap' },
    };
    let returned;

    beforeAll(() => {
      heatmap.mockClear();
      returned = fill(file, 'name', 'task1');
    });

    it('should call heatmap for image type heatmap', () => {
      expect(heatmap).toHaveBeenCalledWith(file, 'name', 'task1', 'heatmap');
    });

    it('should return object', () => {
      expect(returned).toEqual({ type: 'heatmap' });
    });
  });

  describe('default', () => {
    const file = {
      parameters: { imageType: 'unknown' },
    };
    let returned;

    beforeAll(() => {
      heatmap.mockClear();
      returned = fill(file, 'name', 'task1');
    });

    it('should not call heatmap for unknown image type', () => {
      expect(heatmap).not.toHaveBeenCalled();
    });

    it('should return file object', () => {
      expect(returned).toEqual(file);
    });
  });
});
