export const defaultState = {
  abundanceColumn: 'Abundance',
  scoreColumn: 'Score',
  scoreType: 'lte',
};

const validScoreTypes = ['lte', 'gte'];

const fillParameters = (userParams, filename, taskID, imageType) => {
  const addedParameters = {
    filename,
    imageType,
    taskID,
  };

  if (!userParams) {
    return {
      ...defaultState,
      ...addedParameters,
    };
  }

  const {
    abundanceColumn,
    name,
    scoreColumn,
    scoreType,
    ...other
  } = userParams;
  const parameters = { ...addedParameters };

  parameters.abundanceColumn = typeof abundanceColumn === 'string' ? abundanceColumn : defaultState.abundanceColumn;
  parameters.scoreColumn = typeof scoreColumn === 'string' ? scoreColumn : defaultState.scoreColumn;
  parameters.scoreType = scoreType && validScoreTypes.includes(scoreType)
    ? scoreType : defaultState.scoreType;

  return {
    ...parameters,
    ...other,
  };
};

export default fillParameters;
