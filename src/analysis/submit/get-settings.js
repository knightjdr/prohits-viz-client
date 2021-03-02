import arrSortByKey from '../../utils/arr-sort-by-key';
import isFalsyButNotZero from '../../utils/falsy-but-not-zero';

const getNumber = (value) => (
  isFalsyButNotZero(value) ? 'not set' : value
);

const getScoreMessage = (value) => {
  if (value === 'lte') {
    return 'smaller scores better';
  } if (value === 'gte') {
    return 'larger scores better';
  }
  return 'not set';
};

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
  tagArray.push({
    key: 'scoreType',
    text: `Score type: ${getScoreMessage(form.scoreType)}`,
  });

  return tagArray;
};

const getConditionConditionSettings = (form) => {
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
    text: `Readout score filter: ${getNumber(form.readoutScoreFilter)}`,
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

const getScvSettings = (form) => {
  const tagArray = [];

  tagArray.push({
    key: 'primaryFilter',
    text: `Primary filter: ${getNumber(form.primaryFilter)}`,
  });
  tagArray.push({
    key: 'minAbundance',
    text: `Minimum abundance: ${getNumber(form.minAbundance)}`,
  });

  return tagArray;
};

const getSpecificitySettings = (form) => {
  const tagArray = [];

  tagArray.push({
    key: 'primaryFilter',
    text: `Primary filter: ${getNumber(form.primaryFilter)}`,
  });
  tagArray.push({
    key: 'minAbundance',
    text: `Minimum abundance: ${getNumber(form.minAbundance)}`,
  });
  tagArray.push({
    key: 'specificityMetric',
    text: `Metric: ${getNumber(form.specificityMetric)}`,
  });

  return tagArray;
};

const getSettings = (form) => {
  const tagArray = getCommonSettings(form);

  if (form.tool === 'condition-condition') {
    tagArray.push(...getConditionConditionSettings(form));
  } if (form.tool === 'correlation') {
    tagArray.push(...getCorrelationSettings(form));
  } if (form.tool === 'dotplot') {
    tagArray.push(...getDotplotSettings(form));
  } if (form.tool === 'scv') {
    tagArray.push(...getScvSettings(form));
  } if (form.tool === 'specificity') {
    tagArray.push(...getSpecificitySettings(form));
  }

  return arrSortByKey(tagArray, 'text');
};

export default getSettings;
