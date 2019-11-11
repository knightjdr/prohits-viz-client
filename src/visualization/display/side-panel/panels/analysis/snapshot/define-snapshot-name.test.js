import defineSnapshotName from './define-snapshot-name';

jest.mock('nanoid', () => () => 'abcd');

describe('Define snapshot name', () => {
  it('should create name when input name is not defined', () => {
    const tabs = {
      availableAnalysis: ['go-1'],
      availableSnapshots: ['main', 'snapshot-1'],
      snapshotID: 1,
    };
    const inputName = null;
    const expected = {
      id: 2,
      name: 'snapshot-2',
    };
    expect(defineSnapshotName(inputName, tabs)).toEqual(expected);
  });

  it('should use input name when defined and unique', () => {
    const tabs = {
      availableAnalysis: ['go-1'],
      availableSnapshots: ['main', 'snapshot-1'],
      snapshotID: 1,
    };
    const inputName = 'name';
    const expected = {
      id: 2,
      name: 'name',
    };
    expect(defineSnapshotName(inputName, tabs)).toEqual(expected);
  });

  it('should add ID to input name when name is not unique', () => {
    const tabs = {
      availableAnalysis: ['go-1'],
      availableSnapshots: ['main', 'snapshot-1'],
      snapshotID: 1,
    };
    const inputName = 'snapshot-1';
    const expected = {
      id: 2,
      name: 'snapshot-1-2',
    };
    expect(defineSnapshotName(inputName, tabs)).toEqual(expected);
  });

  it('should add nanoID to input name when neither name nor name+ID is unique', () => {
    const tabs = {
      availableAnalysis: ['go-1'],
      availableSnapshots: ['main', 'snapshot-1', 'snapshot-1-2'],
      snapshotID: 1,
    };
    const inputName = 'snapshot-1';
    const expected = {
      id: 2,
      name: 'snapshot-1-abcd',
    };
    expect(defineSnapshotName(inputName, tabs)).toEqual(expected);
  });
});
