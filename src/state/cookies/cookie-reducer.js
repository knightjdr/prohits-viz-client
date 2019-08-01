import { UPDATE_CONSENT } from './cookie-actions';

const initState = {
  consent: undefined,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CONSENT:
      return {
        ...state,
        consent: action.consent,
      };
    default:
      return state;
  }
};

export default reducer;
