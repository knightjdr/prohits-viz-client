const augmentWithSelectionID = (getState, action) => {
  const { active } = getState().tabs;
  return {
    ...action,
    selectionID: active,
  };
};

const augmentMiddleware = ({ getState }) => next => (action) => {
  let augmentedAction = action;
  if (action.AUGMENT_WITH_ACTIVE_SELECTION) {
    augmentedAction = augmentWithSelectionID(getState, augmentedAction);
  }
  return next(augmentedAction);
};

export default augmentMiddleware;
