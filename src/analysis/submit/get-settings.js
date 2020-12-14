import arrSortByKey from '../../utils/arr-sort-by-key';
import isFalsyButNotZero from '../../utils/falsy-but-not-zero';

const getNumber = (value) => (
  isFalsyButNotZero(value) ? 'not set' : value
);

const getCommonSettings = (form) => {
  const tagArray = [];

  if (form.ctrlSub) {
    tagArray.push({
      key: 'ctrlSub',
      text: 'Control subtraction is selected',
    });
  }
  if (form.readoutLengthNorm) {
    tagArray.push({
      key: 'readoutLengthNorm',
      text: 'Readout length normalization is selected',
    });
  }
  if (form.normalization !== 'none') {
    tagArray.push({
      key: 'normalization',
      text: `Condition normalization: ${form.normalization === 'total' ? 'total abundance' : 'specific readout'}`,
    });
  }
  if (form.logBase !== 'none') {
    tagArray.push({
      key: 'logBase',
      text: `Log transformation: base ${form.logBase}`,
    });
  }

  return tagArray;
};

const getCorrelationSettings = (form) => {
  const tagArray = [];

  tagArray.push({
    key: 'conditionAbundanceFilter',
    text: `Condition abundance filter: ${getNumber(form.conditionAbundanceFilter)}`,
  });
  tagArray.push({
    key: 'readoutAbundanceFilter',
    text: `Readout abundance filter: ${getNumber(form.readoutAbundanceFilter)}`,
  });
  tagArray.push({
    key: 'conditionScoreFilter',
    text: `Condition score filter: ${getNumber(form.conditionScoreFilter)}`,
  });
  tagArray.push({
    key: 'readoutScoreFilter',
    text: `Readout abundance filter: ${getNumber(form.readoutScoreFilter)}`,
  });

  return tagArray;
};

const getDotplotSettings = (form) => {
  const tagArray = [];

  tagArray.push({
    key: 'primaryFilter',
    text: `Primary filter: ${getNumber(form.primaryFilter)}`,
  });
  tagArray.push({
    key: 'secondaryFilter',
    text: `Secondary filter: ${getNumber(form.secondaryFilter)}`,
  });
  tagArray.push({
    key: 'minAbundance',
    text: `Minimum abundance: ${getNumber(form.minAbundance)}`,
  });
  tagArray.push({
    key: 'clustering',
    text: `Clustering type: ${form.clustering || 'not set'}`,
  });

  return tagArray;
};

const getSettings = (form) => {
  const tagArray = getCommonSettings(form);

  switch (form.tool) {
    case 'correlation':
      tagArray.push(...getCorrelationSettings(form));
      break;
    case 'dotplot':
      tagArray.push(...getDotplotSettings(form));
      break;
    default:
      break;
  }

  return arrSortByKey(tagArray, 'text');
};

export default getSettings;
