import * as actions from './display-actions';

export const defaultState = {
  plotFixed: false,
};

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case actions.UPDATE_PLOT_POSITION:
      return {
        ...state,
        plotFixed: action.fixed,
        plotTranslate: action.translate,
      };
    default:
      return state;
  }
};

export default reducer;
