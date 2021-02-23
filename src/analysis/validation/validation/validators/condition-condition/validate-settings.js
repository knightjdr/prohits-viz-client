import validateCommonSettings from '../common/validate-settings';
import validateScoreFilters from '../../field-validation/score-filters';

const validateSettings = (settings) => {
  const validated = validateCommonSettings(settings);

  [validated.values, validated.errors] = validateScoreFilters(validated.values, validated.errors);

  return validated;
};

export default validateSettings;
