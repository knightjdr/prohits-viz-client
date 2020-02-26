import criteria from '../../field-validation/criteria';
import validateLogBase from '../../field-validation/log-base';
import validateMinCondition from '../../field-validation/min-conditions';
import validateNormalization from '../../field-validation/normalization';
import validateScoreType from '../../field-validation/score-type';

export const getFieldValidator = value => (validator, warning) => {
  const [valid, validatedValue] = validator(value);
  if (valid) {
    return { value: validatedValue };
  }
  return { error: warning };
};

const validateCommon = (type, value) => {
  const validateField = getFieldValidator(value);

  switch (type) {
    case 'abundance':
      return validateField(criteria.requiredString, 'missing column name');
    case 'condition':
      return validateField(criteria.requiredString, 'missing column name');
    case 'control':
      return validateField(criteria.isString, 'missing column name');
    case 'ctrlSub':
      return validateField(criteria.isBoolean, 'should be a boolean');
    case 'logBase':
      return validateField(validateLogBase, `invalid base: ${value}`);
    case 'minConditions':
      return validateField(validateMinCondition, 'should be a number > 0');
    case 'mockConditionAbundance':
      return validateField(criteria.isBoolean, 'should be a boolean');
    case 'normalization':
      return validateField(validateNormalization, 'invalid value');
    case 'normalizationReadout':
      return validateField(criteria.isString, 'invalid value');
    case 'parsimoniousReadoutFiltering':
      return validateField(criteria.isBoolean, 'should be a boolean');
    case 'readout':
      return validateField(criteria.requiredString, 'missing column name');
    case 'readoutLength':
      return validateField(criteria.isString, 'missing column name');
    case 'readoutLengthNorm':
      return validateField(criteria.isBoolean, 'should be a boolean');
    case 'sampleFile':
      return validateField(criteria.isBoolean, 'should be a boolean');
    case 'score':
      return validateField(criteria.requiredString, 'missing column name');
    case 'scoreType':
      return validateField(validateScoreType, 'invalid value');
    case 'png':
      return validateField(criteria.isBoolean, 'should be a boolean');
    default:
      return null;
  }
};

export default validateCommon;
