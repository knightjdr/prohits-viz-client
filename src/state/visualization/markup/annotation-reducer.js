import * as actions from './annotation-actions';
import * as fileActions from '../data/interactive-file-actions';

const reduceAnnotationList = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    list: {},
  },
});

const reduceInteractiveState = file => (
  file.annotations ? file.annotations : {}
);

const reduceNewAnnotation = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    list: {
      ...state[action.selectionID].list,
      [action.id]: {
        position: { ...action.position },
        text: action.text,
      },
    },
  },
});

const reducePosition = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    list: {
      ...state[action.selectionID].list,
      [action.id]: {
        ...state[action.selectionID].list[[action.id]],
        position: { ...action.position },
      },
    },
  },
});

const reduceSetting = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    [action.setting]: action.value,
  },
});

const reduceShowAnnotations = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    show: action.show,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_ANNOTATION:
      return reduceNewAnnotation(state, action);
    case actions.CHANGE_ANNOTATION_SETTING:
      return reduceSetting(state, action);
    case actions.CLEAR_ALL_ANNOTATIONS:
      return reduceAnnotationList(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceInteractiveState(action.file);
    case actions.TOGGLE_ANNOTATIONS:
      return reduceShowAnnotations(state, action);
    case actions.UPDATE_ANNOTATION_POSITION:
      return reducePosition(state, action);
    default:
      return state;
  }
};

export default reducer;
