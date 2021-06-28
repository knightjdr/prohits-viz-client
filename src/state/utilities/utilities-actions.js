export const SET_UTILITY_FIELD = 'SET_UTILITY_FIELD';
export const SET_UTILITY_FILE = 'SET_UTILITY_FILE';
export const SET_UTILITY_TYPE = 'SET_UTILITY_TYPE';

export const setUtilityField = (field, value) => ({
  field,
  type: SET_UTILITY_FIELD,
  value,
});

export const setUtilityFile = (file) => ({
  file,
  type: SET_UTILITY_FILE,
});

export const setUtilityType = (utility) => ({
  type: SET_UTILITY_FILE,
  utility,
});
