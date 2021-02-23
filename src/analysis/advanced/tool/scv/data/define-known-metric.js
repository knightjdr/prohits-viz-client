const interactionFiles = ['crapome', 'saint'];

const defineKnownMetric = (fileType, knownMetric) => {
  if (!knownMetric && interactionFiles.includes(fileType)) {
    return 'interaction';
  }
  return '';
};

export default defineKnownMetric;
