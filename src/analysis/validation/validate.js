const validate = (form) => {
  const formData = new FormData();

  Object.keys(form).forEach((key) => {
    if (key === 'files') {
      form.files.forEach((file) => {
        formData.append('file', file);
      });
    } else {
      formData.append(key, form[key]);
    }
  });

  return {
    errors: {},
    form: formData,
    tool: form.tool,
    valid: true,
  };
};

export default validate;
