import isObject from '../../../utils/is-object';

const fillAnalysis = (fileAnalysis) => {
  if (!fileAnalysis || !isObject(fileAnalysis) || Object.keys(fileAnalysis).length === 0) {
    return {};
  }

  return fileAnalysis;
};

export default fillAnalysis;
