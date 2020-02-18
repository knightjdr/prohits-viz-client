export const defaultState = {
  error: false,
  exporting: false,
  file: '',
  format: 'svg',
};

const validFormats = {
  png: true,
  svg: true,
};

const fillExporter = (userExporter) => {
  if (!userExporter) {
    return { ...defaultState };
  }

  const { format } = userExporter;

  return {
    ...defaultState,
    format: validFormats[format] ? format : defaultState.format,
  };
};

export default fillExporter;
