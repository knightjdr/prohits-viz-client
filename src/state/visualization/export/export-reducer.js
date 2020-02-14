import * as actions from './export-actions';

export const defaultState = {
  error: false,
  exporting: false,
  format: 'svg',
};

const reduceAndClear = state => ({
  ...state,
  file: '',
});

const reduceAndDownload = (state, action) => ({
  ...state,
  error: false,
  exporting: false,
  file: action.file,
});

const reduceAndError = state => ({
  ...state,
  error: true,
  exporting: false,
  file: '',
});

const reduceAndFormat = (state, action) => ({
  ...state,
  format: action.format,
});

const reduceAndExport = state => ({
  ...state,
  error: false,
  exporting: true,
  file: '',
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.CLEAR_EXPORT_IMAGE:
      return reduceAndClear(state);
    case actions.DOWNLOAD_EXPORT_IMAGE:
      return reduceAndDownload(state, action);
    case actions.EXPORT_ERROR:
      return reduceAndError(state);
    case actions.EXPORT_FORMAT:
      return reduceAndFormat(state, action);
    case actions.EXPORT_IMAGE:
      return reduceAndExport(state);
    default:
      return state;
  }
};

export default reducer;
