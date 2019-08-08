export const defaultState = {};

const fillParameters = (userParams, filename, taskID) => {
  const addedParameters = {
    filename,
    imageType: 'circ-heatmap',
    taskID,
  };

  if (!userParams) {
    return {
      ...defaultState,
      ...addedParameters,
    };
  }

  const {
    ...other
  } = userParams;
  const parameters = { ...addedParameters };

  return {
    ...parameters,
    ...other,
  };
};

export default fillParameters;
