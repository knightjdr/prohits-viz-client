import validateConditionCondition from './condition-condition/validate-settings';
import validateCommonSettings from './common/validate-settings';
import validateDotplot from './dotplot/validate-settings';
import validateSCV from './scv/validate-settings';

const validateImageType = {
  'condition-condition': validateConditionCondition,
  correlation: validateCommonSettings,
  dotplot: validateDotplot,
  scv: validateSCV,
  specificity: validateCommonSettings,
};

const getValidator = (imageType) => (
  validateImageType[imageType] ? validateImageType[imageType] : () => {}
);

export default getValidator;
