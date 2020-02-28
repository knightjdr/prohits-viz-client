import * as actions from './form-actions';

export const defaultState = {
  abundance: '',
  condition: '',
  errors: {},
  files: [],
  readout: '',
  sampleFile: false,
  score: '',
  tool: '',
  uploading: false,

  fileType: '',
  header: [],
  showAdvanced: false,
  step: 0,
};

const reduceAndReset = () => ({ ...defaultState });

const reduceAndSetField = (state, action) => ({
  ...state,
  [action.field]: action.value,
});

const reduceAndSetFields = (state, action) => ({
  ...state,
  ...action.fields,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.RESET_FORM:
      return reduceAndReset();
    case actions.SET_FORM_FIELD:
      return reduceAndSetField(state, action);
    case actions.SET_FORM_FIELDS:
      return reduceAndSetFields(state, action);
    default:
      return state;
  }
};

export default reducer;
