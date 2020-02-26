import validateCorrelation from './correlation/validate-fields';
import validateDotplot from './dotplot/validate-fields';

const validateImageType = {
  correlation: validateCorrelation,
  dotplot: validateDotplot,
};

const getValidator = imageType => (
  validateImageType[imageType] ? validateImageType[imageType] : () => {}
);

export default getValidator;
