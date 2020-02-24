const validate = (form) => {
  const formData = new FormData();
  Object.keys(form).forEach(key => formData.append(key, form[key]));

  return {
    errors: {},
    form: formData,
    tool: form.tool,
    valid: true,
  };
};

export default validate;
