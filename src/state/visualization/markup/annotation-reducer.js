import * as actions from './annotation-actions';
import * as fileActions from '../data/interactive-file-actions';

const reduceInteractiveState = file => (
  file.annotations ? file.annotations : {}
);

const reduceColor = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    color: action.color,
  },
});

const reduceShowAnnotations = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    showAnnotations: action.showAnnotations,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceInteractiveState(action.file);
    case actions.SET_ANNOTATION_COLOR:
      return reduceColor(state, action);
    case actions.TOGGLE_ANNOTATIONS:
      return reduceShowAnnotations(state, action);
    default:
      return state;
  }
};

export default reducer;
