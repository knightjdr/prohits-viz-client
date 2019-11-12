export const reduceAndAddSnapshot = (state, action, property) => ({
  ...state,
  [action.name]: action[property],
});

export const reduceAndRemoveSnapshot = (state, action) => (
  Object.entries(state).reduce((accum, [snapshot, value]) => (
    snapshot !== action.name ? { ...accum, [snapshot]: value } : accum
  ), {})
);
