const augmentWithSnapshotID = (getState, action) => {
  const { activeSnapshot } = getState().tabs;
  return {
    ...action,
    snapshotID: activeSnapshot,
  };
};

const augmentMiddleware = ({ getState }) => next => (action) => {
  let augmentedAction = action;
  if (action.AUGMENT_WITH_ACTIVE_SNAPSHOT) {
    augmentedAction = augmentWithSnapshotID(getState, augmentedAction);
  }
  return next(augmentedAction);
};

export default augmentMiddleware;
