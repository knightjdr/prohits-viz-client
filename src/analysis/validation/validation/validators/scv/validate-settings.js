import validateAbundanceFilters from '../../field-validation/abundance-filters';
import validateCommonSettings from '../common/validate-settings';

const validateSettings = (settings) => {
  const validated = validateCommonSettings(settings);

  [validated.values, validated.errors] = validateAbundanceFilters(validated.values, validated.errors);

  return validated;
};

export default validateSettings;
