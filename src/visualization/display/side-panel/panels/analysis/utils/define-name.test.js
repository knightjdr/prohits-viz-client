import defineName from './define-name';

jest.mock('nanoid', () => () => 'abcd');

describe('Define analysis/snapshot name', () => {
  describe('snapshot', () => {
    it('should create name when input name is not defined', () => {
      const tabs = {
        analysisID: 1,
        availableAnalyses: ['go-1'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
      };
      const inputName = null;
      const prefix = 'snapshot';
      const expected = {
        id: 2,
        name: 'snapshot-2',
      };
      expect(defineName(inputName, tabs, prefix)).toEqual(expected);
    });

    it('should use input name when defined and unique', () => {
      const tabs = {
        availableAnalyses: ['go-1'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
      };
      const inputName = 'name';
      const prefix = 'snapshot';
      const expected = {
        id: 2,
        name: 'name',
      };
      expect(defineName(inputName, tabs, prefix)).toEqual(expected);
    });

    it('should add ID to input name when name is not unique', () => {
      const tabs = {
        availableAnalyses: ['go-1'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
      };
      const inputName = 'snapshot-1';
      const prefix = 'snapshot';
      const expected = {
        id: 2,
        name: 'snapshot-1-2',
      };
      expect(defineName(inputName, tabs, prefix)).toEqual(expected);
    });

    it('should add nanoID to input name when neither name nor name+ID is unique', () => {
      const tabs = {
        availableAnalyses: ['go-1'],
        availableSnapshots: ['main', 'snapshot-1', 'snapshot-1-2'],
        snapshotID: 1,
      };
      const inputName = 'snapshot-1';
      const prefix = 'snapshot';
      const expected = {
        id: 2,
        name: 'snapshot-1-abcd',
      };
      expect(defineName(inputName, tabs, prefix)).toEqual(expected);
    });
  });

  describe('analysis', () => {
    it('should create name for analysis', () => {
      const tabs = {
        analysisID: 1,
        availableAnalyses: ['go-1'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
      };
      const inputName = null;
      const prefix = 'analysis';
      const expected = {
        id: 2,
        name: 'analysis-2',
      };
      expect(defineName(inputName, tabs, prefix)).toEqual(expected);
    });
  });
});
