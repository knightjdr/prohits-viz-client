import criteria from '../../field-validation/criteria';
import validateCommon, { getFieldValidator } from '../common/validate-fields';
import validateMinCondition from '../../field-validation/min-conditions';

const acceptedMetrics = ['fe', 'zscore', 'sscore', 'dscore', 'wdscore'];

const validateMetric = (value) => {
  if (!value || acceptedMetrics.includes(value)) {
    return [true, value];
  }

  return [false, null];
};

const validateFields = (type, value) => {
  const validatedResult = validateCommon(type, value);

  if (validatedResult === null) {
    const validateField = getFieldValidator(value);
    switch (type) {
      case 'minAbundance':
        return validateField(criteria.isNumber, 'should be a number');
      case 'minConditions':
        return validateField(validateMinCondition, 'should be a number > 0');
      case 'primaryFilter':
        return validateField(criteria.isNumber, 'should be a number');
      case 'specificityMetric':
        return validateField(validateMetric, `invalid metric: ${value}`);
      default:
        return {};
    }
  }

  return validatedResult;
};

export default validateFields;
