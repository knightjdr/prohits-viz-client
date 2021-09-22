import validateCrisprConvert from './crispr-convert-validate';
import validatePVConvert from './pvconvert-validate';
import validateSaintDomainEnrich from './saint-domain-enrich-validate';
import validateSaintFEA from './saint-fea-validate';
import validateSaintStats from './saint-stats-validate';
import validateTextBiogridNetwork from './text-biogrid-validate';
import validateTextSymbolFix from './text-symbol-fix-validate';

const validateUtility = (fields) => {
  const { utility } = fields;

  if (utility === 'crispr_convert') {
    return validateCrisprConvert(fields);
  } if (utility === 'pvconvert') {
    return validatePVConvert(fields);
  } if (utility === 'saint_biogrid_network') {
    return validateTextBiogridNetwork(fields);
  } if (utility === 'saint_domain_enrich') {
    return validateSaintDomainEnrich(fields);
  } if (utility === 'saint_fea') {
    return validateSaintFEA(fields);
  } if (utility === 'saint_stats') {
    return validateSaintStats(fields);
  } if (utility === 'text_biogrid_network') {
    return validateTextBiogridNetwork(fields);
  } if (utility === 'text_symbol_fix') {
    return validateTextSymbolFix(fields);
  }
  return { fields: null, errors: null };
};

const validate = (fields) => {
  const { files, utility } = fields;

  let errors = {};
  if (
    !files
    || files.length === 0
    || !(files[0] instanceof File)
  ) {
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
    if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });
  fields.files.forEach((file) => {
    formData.append('file', file);
  });
  formData.append('utility', utility);

  return {
    form: formData,
    errors: null,
  };
};

export default validate;
