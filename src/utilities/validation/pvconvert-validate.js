const validTypes = ['dotplot', 'heatmap', 'scatter'];

const validatePVConvert = (fields) => {
  const { file, imageType, utility } = fields;

  const errors = {};
  if (!(file || file instanceof File)) {
    errors.file = 'Please select a valid file';
  }
  if (!validTypes.includes(imageType)) {
    errors.imageType = 'Invalid image type';
  } if (utility !== 'pvconvert') {
    errors.utility = 'Mismatch between selected and submitted utility';
  }

  return errors;
};

export default validatePVConvert;
