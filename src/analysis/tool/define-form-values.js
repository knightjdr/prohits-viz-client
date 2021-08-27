const commonValues = {
  abundance: '',
  condition: '',
  control: '',
  ctrlSub: true,
  logBase: 'none',
  mockConditionAbundance: false,
  normalization: 'none',
  normalizationReadout: '',
  readout: '',
  readoutLength: '',
  readoutLengthNorm: false,
  score: '',
  scoreType: 'lte',
  png: false,
};

export const defaultFormValues = {
  'condition-condition': {
    ...commonValues,
    conditionX: '',
    conditionY: '',
    minAbundance: 0,
    primaryFilter: 0.01,
    secondaryFilter: 0.05,
  },
  correlation: {
    ...commonValues,
    automaticallySetFill: true,
    clustering: 'hierarchical',
    clusteringMethod: 'complete',
    clusteringOptimize: true,
    conditionAbundanceFilter: 0,
    conditionScoreFilter: 0.1,
    correlation: 'pearson',
    cytoscapeCutoff: 0.7,
    distance: 'euclidean',
    fillColor: 'blueRed',
    ignoreSourceTargetMatches: false,
    minConditions: 1,
    parsimoniousReadoutFiltering: false,
    readoutAbundanceFilter: 0,
    readoutScoreFilter: 0.01,
    useReplicates: true,
  },
  dotplot: {
    ...commonValues,
    abundanceCap: 50,
    automaticallySetFill: true,
    biclusteringApprox: false,
    clustering: 'hierarchical',
    clusteringMethod: 'ward',
    clusteringOptimize: true,
    conditionClustering: 'conditions',
    conditionList: '',
    distance: 'canberra',
    edgeColor: 'blue',
    fillColor: 'blue',
    minAbundance: 0,
    minConditions: 1,
    ratioDimension: 'diameter',
    readoutClustering: 'readouts',
    readoutList: '',
    parsimoniousReadoutFiltering: false,
    primaryFilter: 0.01,
    secondaryFilter: 0.05,
    writeDistance: false,
    writeHeatmap: false,
  },
  scv: {
    ...commonValues,
    abundanceCap: 50,
    abundanceFilterColumn: '',
    conditionIDType: 'symbol',
    conditionMapColumn: '',
    conditionMapFile: [],
    known: '',
    minAbundance: 0,
    otherAbundance: [],
    primaryFilter: 0.01,
    proteinTissues: ['HEK-293'],
    readoutIDType: 'symbol',
    readoutMapColumn: '',
    readoutMapFile: [],
    rnaTissues: ['HEK 293'],
    specificity: false,
    verticalHeatmap: false,
  },
  specificity: {
    ...commonValues,
    markExpression: false,
    minAbundance: 0,
    primaryFilter: 0.01,
    removeContaminants: false,
    specificityMetric: 'fe',
  },
};

export const customFileTypeValues = {
  bagel: {
    dotplot: {
      abundanceCap: 10,
      edgeColor: 'greyscale',
      fillColor: 'blueRed',
    },
    scv: {
      abundanceCap: 10,
    },
  },
  drugz: {
    dotplot: {
      abundanceCap: 10,
      edgeColor: 'greyscale',
      fillColor: 'blueRed',
    },
    scv: {
      abundanceCap: 10,
    },
  },
  mageck: {
    dotplot: {
      abundanceCap: 10,
      edgeColor: 'greyscale',
      fillColor: 'blueRed',
    },
    scv: {
      abundanceCap: 10,
    },
  },
  ranks: {
    dotplot: {
      abundanceCap: 10,
      edgeColor: 'greyscale',
      fillColor: 'blueRed',
    },
    scv: {
      abundanceCap: 10,
    },
  },
};

const fieldsToOverrideOnToolChange = {
  'condition-condition': [],
  correlation: ['automaticallySetFill', 'fillColor'],
  dotplot: ['abundanceCap', 'automaticallySetFill', 'fillColor'],
  scv: ['abundanceCap'],
  specificity: [],
};

const defineFormValues = (form, tool) => {
  const defaults = {
    ...defaultFormValues[tool],
    ...customFileTypeValues[form.fileType]?.[tool],
  };

  const formValuesToOverrideOnToolChange = fieldsToOverrideOnToolChange[tool].reduce((accum, field) => ({
    ...accum,
    [field]: defaults[field],
  }), {});

  return {
    ...defaults,
    ...form,
    ...formValuesToOverrideOnToolChange,
  };
};

export default defineFormValues;
