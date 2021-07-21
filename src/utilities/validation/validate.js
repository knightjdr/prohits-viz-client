import validatePVConvert from './pvconvert-validate';
import validateSaintDomainEnrich from './saint-domain-enrich-validate';
import validateSaintFEA from './saint-fea-validate';
import validateSaintStats from './saint-stats-validate';

const validateUtility = (fields) => {
  const { utility } = fields;

  if (utility === 'pvconvert') {
    return validatePVConvert(fields);
  } if (utility === 'saint_domain_enrich') {
    return validateSaintDomainEnrich(fields);
  } if (utility === 'saint_fea') {
    return validateSaintFEA(fields);
  } if (utility === 'saint_stats') {
    return validateSaintStats(fields);
  }
  return { fields: null, errors: null };
};

const validate = (fields) => {
  const { file, utility } = fields;

  let errors = {};
  if (!(file || file instanceof File)) {
    errors.file = 'Please select a file';
  }

  const validation = validateUtility(fields);

  errors = { ...errors, ...validation.errors };
  if (Object.keys(errors).length > 0) {
    return {
      errors,
      form: null,
    };
  }

  const formData = new FormData();

  Object.entries(validation.fields).forEach(([key, value]) => {
    formData.append(key, value);
  });
  formData.append('file', fields.file);
  formData.append('utility', utility);

  return {
    form: formData,
    errors: null,
  };
};

export default validate;
