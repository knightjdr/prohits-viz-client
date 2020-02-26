import validate from './validation/validate';

const processForm = (form) => {
  const validation = validate(form.tool, form, form.files);
  if (Object.keys(validation.errors).length) {
    return {
      errors: validation.errors,
    };
  }

  const formData = new FormData();

  Object.keys(validation.values).forEach((key) => {
    formData.append(key, form[key]);
  });

  form.files.forEach((file) => {
    formData.append('file', file);
  });

  return {
    form: formData,
    tool: form.tool,
  };
};

export default processForm;
