import validate from './validate';

describe('Dotplot/Heatmap validation interface', () => {
  it('should return valid object', () => {
    const data = {
      abundance: 'AvgSpec',
      condition: 'Bait',
      control: 'ctrlCounts',
      ctrlSub: 'true',
      logBase: '10',
      minConditions: '1',
      mockConditionAbundance: 'false',
      normalization: 'total',
      normalizationReadout: '',
      parsimoniousReadoutFiltering: 'false',
      readout: 'PreyGene',
      readoutLength: '',
      readoutLengthNorm: 'false',
      sampleFile: 'true',
      score: 'BFDR',
      scoreType: 'lte',
      png: 'false',

      abundanceCap: '50',
      biclusteringApprox: 'false',
      clustering: 'hierarchical',
      clusteringMethod: 'complete',
      clusteringOptimize: 'true',
      conditionClustering: '',
      conditionList: '',
      distance: 'euclidean',
      edgeColor: 'blue',
      fillColor: 'blue',
      minAbundance: '0',
      primaryFilter: '0.01',
      readoutClustering: '',
      readoutList: '',
      secondaryFilter: '0.05',
      writeDistance: 'false',
      writeHeatmap: 'false',
    };
    const files = [{}];

    const expected = {
      errors: {},
      values: {
        abundance: 'AvgSpec',
        condition: 'Bait',
        control: 'ctrlCounts',
        ctrlSub: true,
        logBase: '10',
        minConditions: 1,
        mockConditionAbundance: false,
        normalization: 'total',
        normalizationReadout: '',
        parsimoniousReadoutFiltering: false,
        readout: 'PreyGene',
        readoutLength: '',
        readoutLengthNorm: false,
        sampleFile: true,
        score: 'BFDR',
        scoreType: 'lte',
        png: false,

        abundanceCap: 50,
        biclusteringApprox: false,
        clustering: 'hierarchical',
        clusteringMethod: 'complete',
        clusteringOptimize: true,
        conditionClustering: '',
        conditionList: '',
        distance: 'euclidean',
        edgeColor: 'blue',
        fillColor: 'blue',
        minAbundance: 0,
        primaryFilter: 0.01,
        readoutClustering: '',
        readoutList: '',
        secondaryFilter: 0.05,
        writeDistance: false,
        writeHeatmap: false,
      },
    };
    expect(validate('dotplot', data, files)).toEqual(expected);
  });
});
