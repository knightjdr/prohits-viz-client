import React from 'react';

import CircHeatmapKnown from './images/circheatmap-known.svg';

import helpCommon from './help-common';

import './help.css';

const help = {
  ...helpCommon,
  abundanceCap: `Any readouts with an abundance value above this cutoff
    will be capped at this value in the output image. This is to give greater
    visual dynamic range for lower values when outlier readouts with very high
    abundance are present. This cutoff will be dependent on the data set and should
    be selected accordingly. It will initially be applied to all metrics, but can
    be customized on a metric-by-metric basis from the interactive viewer.`,
  abundanceFilterColumn: `The name of the column to use for filtering by abundance, if desired.
    While filtering by abundance can only be applied to one column initially, it can
    be customized on a metric-by-metric basis from the interactive viewer`,
  known: (
    <div>
      <p>
        Knowledge of expected readouts can be displayed as a partial circle around the
        heat map rings. An expected readout could be a protein known to interact with a bait, for example.
        Select a metric to use for &quot;knownness&quot; from those currently supported. To accurately quantify
        &quot;knownness&quot;, you can supply condition and readout maps for mapping the names in the input file
        to official identifiers.
      </p>
      <div className="analysis__advanced-field-modal-img">
        <img
          alt="Knownness circle surrounding heat map rings"
          height={273.4}
          src={CircHeatmapKnown}
          width={319.1}
        />
      </div>
    </div>
  ),
  minAbundance: `In addition to the primary filter requirement, a readout must have an abundance
    value at or above this minimum to be included in the analysis. This cutoff will be
    applied to the first abundance column selected (if multiple were chosen), or the column
    specified in the "Column for abundance filtering" option. It can also be customized on a
    metric-by-metric basis from the interactive viewer.`,
  primaryFilter: 'Readouts must satisfy this score filter to be included in the visualization',
  proteinTissues: 'Select one or more tissues for protein expression data to include.',
  rnaTissues: 'Select one or more tissues for RNA expression data to include.',
  specificity: `Display readout specificity as an additional circle. The specificity is calulcated
    as a simple fold enrichment score for each readout and the condition it was detected with, relative
    to the entire dataset. It is only useful for datasets with multiple conditions, particularly those
    with at least ~20 conditions.`,
  verticalHeatmap: 'Generate a traditional vertical heat map in addition to the circular default.',
};

export default help;
