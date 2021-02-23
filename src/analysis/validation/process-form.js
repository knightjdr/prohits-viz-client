import validate from './validation/validate';

const processForm = (form) => {
  const validation = validate(form.tool, form, form.files);
  if (Object.keys(validation.errors).length) {
    return {
      errors: validation.errors,
    };
  }
  const formData = new FormData();

  Object.entries(validation.values).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  form.files.forEach((file) => {
    formData.append('file', file);
  });

  if (form?.conditionMapFile?.length > 0) {
    formData.append('helperFile', form.conditionMapFile[0], 'condition-map');
  }
  if (form?.readoutMapFile?.length > 0) {
    formData.append('helperFile', form.readoutMapFile[0], 'readout-map');
  }

  return {
    form: formData,
    tool: form.tool,
  };
};

export default processForm;
