const getStep = (form) => {
  if (form.step === 0 && form.files.length > 0 && form.fileType) {
    return 1;
  } if (form.step === 2 && form.type) {
    return 3;
  } if (form.step === 4 && form.abundance && form.condition && form.readout && form.score) {
    return 5;
  }
  return form.step;
};

export default getStep;
