import criteria from '../../field-validation/criteria';
import validateColor from '../../field-validation/color';
import validateCommon, { getFieldValidator } from '../common/validate-fields';
import validateClusteringMethod from '../../field-validation/clustering-method';
import validateClusteringMetric from '../../field-validation/clustering-metric';
import validateClusteringType,
{ validateConditionClustering, validateReadoutClustering } from '../../field-validation/clustering-type';

const validateNoClusteringType = (value) => (
  criteria.isString(value) || Array.isArray(value)
);

const validateFields = (type, value) => {
  const validatedResult = validateCommon(type, value);

  if (validatedResult === null) {
    const validateField = getFieldValidator(value);
    switch (type) {
      case 'abundanceCap':
        return validateField(criteria.isNumber, 'should be a number');
      case 'biclusteringApprox':
        return validateField(criteria.isBoolean, 'should be a boolean');
      case 'clustering':
        return validateField(validateClusteringType, 'invalid value');
      case 'clusteringMethod':
        return validateField(validateClusteringMethod, 'invalid method');
      case 'clusteringOptimize':
        return validateField(criteria.isBoolean, 'should be a boolean');
      case 'conditionClustering':
        return validateField(validateConditionClustering, 'invalid value');
      case 'conditionList':
        return validateField(validateNoClusteringType, 'missing list of conditions for clustering');
      case 'distance':
        return validateField(validateClusteringMetric, 'invalid metric');
      case 'edgeColor':
        return validateField(validateColor, 'invalid color');
      case 'fillColor':
        return validateField(validateColor, 'invalid color');
      case 'minAbundance':
        return validateField(criteria.isNumber, 'should be a number');
      case 'primaryFilter':
        return validateField(criteria.isNumber, 'should be a number');
      case 'readoutClustering':
        return validateField(validateReadoutClustering, 'invalid value');
      case 'readoutList':
        return validateField(validateNoClusteringType, 'missing list of readouts for clustering');
      case 'secondaryFilter':
        return validateField(criteria.isNumber, 'should be a number');
      case 'writeDistance':
        return validateField(criteria.isBoolean, 'should be a boolean');
      case 'writeHeatmap':
        return validateField(criteria.isBoolean, 'should be a boolean');
      default:
        return {};
    }
  }

  return validatedResult;
};

export default validateFields;
