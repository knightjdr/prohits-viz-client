import validateConditionCondition from './condition-condition/validate-settings';
import validateCorrelation from './correlation/validate-settings';
import validateDotplot from './dotplot/validate-settings';
import validateSpecifcity from './specificity/validate-settings';

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
