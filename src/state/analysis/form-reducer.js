import * as actions from './form-actions';

export const defaultState = {
  files: [],
  fileType: '',
  step: 1,
};

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
    case actions.SET_FORM_FIELD:
      return reduceAndSetField(state, action);
    case actions.SET_FORM_FIELDS:
      return reduceAndSetFields(state, action);
    default:
      return state;
  }
};

export default reducer;
