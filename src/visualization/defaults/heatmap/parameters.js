import { validateString } from '../../../utils/validate-type';

export const defaultState = {
  abundanceColumn: 'Abundance',
  scoreColumn: 'Score',
  scoreType: 'lte',
};

export const validateScoreType = (scoreType) => {
  const validTypes = ['lte', 'gte'];
  return scoreType && validTypes.includes(scoreType)
    ? scoreType : defaultState.scoreType;
};

const fillParameters = (userParams, filename, taskID) => {
  const {
    abundanceColumn,
    scoreColumn,
    scoreType,
    ...other
  } = userParams;

  return {
    abundanceColumn: validateString(abundanceColumn, defaultState.abundanceColumn),
    filename,
    scoreColumn: validateString(scoreColumn, defaultState.scoreColumn),
    scoreType: validateScoreType(scoreType),
    taskID,
    ...other,
  };
};

export default fillParameters;
