import * as actions from './export-actions';

describe('Export actions', () => {
  it('should dispatch an action to clear export image', () => {
    const expectedAction = {
      type: actions.CLEAR_EXPORT_IMAGE,
    };
    expect(actions.clearExportImage()).toEqual(expectedAction);
  });

  it('should dispatch an action to download export image', () => {
    const expectedAction = {
      file: 'file.svg',
      type: actions.DOWNLOAD_EXPORT_IMAGE,
    };
    expect(actions.downloadExportImage('file.svg')).toEqual(expectedAction);
  });

  it('should dispatch an action when exporting creates an error', () => {
    const expectedAction = {
      type: actions.EXPORT_ERROR,
    };
    expect(actions.exportError()).toEqual(expectedAction);
  });

  it('should dispatch an action to set export format', () => {
    const expectedAction = {
      format: 'png',
      type: actions.EXPORT_FORMAT,
    };
    expect(actions.setExportFormat('png')).toEqual(expectedAction);
  });

  it('should dispatch an action when exporting', () => {
    const expectedAction = {
      type: actions.EXPORT_IMAGE,
    };
    expect(actions.exportImage()).toEqual(expectedAction);
  });
});
