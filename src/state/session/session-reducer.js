import SET_SESSION_ID from './session-actions';

const reducer = (state = null, action) => {
  switch (action.type) {
    case SET_SESSION_ID:
      return action.id;
    default:
      return state;
  }
};

export default reducer;
