import validateConditionCondition from './condition-condition/validate-fields';
import validateCorrelation from './correlation/validate-fields';
import validateDotplot from './dotplot/validate-fields';
import validateSCV from './scv/validate-fields';
import validateSpecifcity from './specificity/validate-fields';

const validateImageType = {
  'condition-condition': validateConditionCondition,
  correlation: validateCorrelation,
  dotplot: validateDotplot,
  scv: validateSCV,
  specificity: validateSpecifcity,
};

const getValidator = (imageType) => (
  validateImageType[imageType] ? validateImageType[imageType] : () => {}
);

export default getValidator;
