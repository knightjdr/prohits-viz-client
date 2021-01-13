import validateConditionCondition from './condition-condition/validate-fields';
import validateCorrelation from './correlation/validate-fields';
import validateDotplot from './dotplot/validate-fields';
import validateSpecifcity from './specificity/validate-fields';

const validateImageType = {
  'condition-condition': validateConditionCondition,
  correlation: validateCorrelation,
  dotplot: validateDotplot,
  specificity: validateSpecifcity,
};

const getValidator = (imageType) => (
  validateImageType[imageType] ? validateImageType[imageType] : () => {}
);

export default getValidator;
