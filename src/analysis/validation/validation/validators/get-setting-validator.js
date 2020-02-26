import validateCorrelation from './correlation/validate-settings';
import validateDotplot from './dotplot/validate-settings';

const validateImageType = {
  correlation: validateCorrelation,
  dotplot: validateDotplot,
};

const getValidator = imageType => (
  validateImageType[imageType] ? validateImageType[imageType] : () => {}
);

export default getValidator;
