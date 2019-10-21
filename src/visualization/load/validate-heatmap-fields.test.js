import { validateColumnDB, validateRowDB } from './validate-heatmap-db';
import validateHeatmapFields from './validate-heatmap-fields';

jest.mock('./validate-heatmap-db', () => ({
  validateColumnDB: jest.fn(),
  validateRowDB: jest.fn(),
}));

describe('Validate heat map fields', () => {
  describe('dotplot image type', () => {
    beforeAll(() => {
      validateColumnDB.mockClear();
      validateRowDB.mockClear();
      validateHeatmapFields('dotplot', {});
    });

    it('should validate column database', () => {
      expect(validateColumnDB).toHaveBeenCalled();
    });

    it('should validate row database', () => {
      expect(validateRowDB).toHaveBeenCalled();
    });
  });

  describe('heatmap image type', () => {
    beforeAll(() => {
      validateColumnDB.mockClear();
      validateRowDB.mockClear();
      validateHeatmapFields('heatmap', {});
    });

    it('should validate column database', () => {
      expect(validateColumnDB).toHaveBeenCalled();
    });

    it('should validate row database', () => {
      expect(validateRowDB).toHaveBeenCalled();
    });
  });

  describe('other image type', () => {
    beforeAll(() => {
      validateColumnDB.mockClear();
      validateRowDB.mockClear();
      validateHeatmapFields('other', {});
    });

    it('should not validate column database', () => {
      expect(validateColumnDB).not.toHaveBeenCalled();
    });

    it('should not validate row database', () => {
      expect(validateRowDB).not.toHaveBeenCalled();
    });
  });
});
