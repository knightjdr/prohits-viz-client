import validateControl from '../../field-validation/control';
import validateReadoutLength from '../../field-validation/readout-length';
import { validateNormalizationSetting } from '../../field-validation/normalization';

const validateSettings = (settings) => {
  const validated = { values: { ...settings } };

  [validated.values, validated.errors] = validateControl(validated.values, validated.errors);
  [validated.values, validated.errors] = validateNormalizationSetting(validated.values, validated.errors);
  [validated.values, validated.errors] = validateReadoutLength(validated.values, validated.errors);

  return validated;
};

export default validateSettings;
