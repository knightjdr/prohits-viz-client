export const defaultState = {
  scoreType: 'lte',
};

export const validateScoreType = (scoreType) => {
  const validTypes = ['lte', 'gte'];
  return scoreType && validTypes.includes(scoreType)
    ? scoreType : defaultState.scoreType;
};

const fillParameters = (userParams, filename, taskID) => {
  const {
    scoreType,
    ...other
  } = userParams;

  return {
    filename,
    scoreType: validateScoreType(scoreType),
    taskID,
    ...other,
  };
};

export default fillParameters;
