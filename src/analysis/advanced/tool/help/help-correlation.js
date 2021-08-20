import React from 'react';

import helpCommon from './help-common';

import MonoColorScale from './images/mono-color-scales.svg';
import Link from '../../../../components/link/text/link';

import './help.css';

const help = {
  ...helpCommon,
  conditionAbundanceFilter: `In addition to the score filter requirement, a readout must have an abundance value
    above this parameter for at least one condition to be included in readout-readout correlation analysis. A high
    value helps to ensure that a readout is sufficiently abundant to ensure its suitability for analysis. This
    prevents low abundance readouts from skewing the analysis. This parameter should be set to a lower value for
    small datasets.`,
  conditionScoreFilter: `Only readouts that pass this cutoff will be used for the condition-condition correlation
    analysis. If a readout satisfies this cutoff for at least one condition, all quantitative values for this
    readout will be used across all conditions, even those that did not satisfy the cutoff in particular
    condition-readout pairs. If readouts are not guaranteed to be present in all conditions, this should be set
    to a less stringent value than the cutoff for readout correlation to ensure sufficient data points for correlation.
    If readouts are guaranteed to be present in all conditions, or as the number of conditions and detected readouts in
    the dataset increases, this parameter can be made more stringent.`,
  cytoscapeCutoff: (
    <div>
      <p>
        Text files compatible with
        {' '}
        <Link to="https://www.ncbi.nlm.nih.gov/pubmed/21149340">
          Cytoscape
        </Link>
        {' '}
        containing readout-readout and condition-condition pairs will be output from this tool to assist in generating
        network diagrams based on correlation profiles. This parameter determines which pairs will be output, i.e. if a
        pair of readouts has a correlation value above or equal to the default value of 0.7, it will be classified as an
        &quot;interaction&quot; pair and will be found in this file, and hence will have a connecting edge in Cytoscape.
        The text files will contain the readout/condition pair and the correlation value.
      </p>
    </div>
  ),
  fillColor: (
    <div>
      <p>
        The fill colour to apply to cells indicating the correlation.
      </p>
      <div className="analysis__advanced-field-modal-img">
        <img
          alt="Fill color scales"
          height={194}
          src={MonoColorScale}
          width={338}
        />
      </div>
    </div>
  ),
  ignoreSourceTargetMatches: (
    <div>
      <p>
        By default all abundance information is used when calculating the correlation between
        readouts X and Y. However, there are cases when it may be appropriate to ignore certain conditions when those
        conditions may have skewed abundance values for either of the readouts being compared. For example, if X and
        Y are genes and they were also used as baits in protein-protein interaction analysis, any detected abundance
        values for the bait gene could be distorted by overexpression artifacts. Ignoring these abundance values may
        prevent the correlation from being skewed by these artifacts. Enabling this option will cause any
        &quot;target&quot; conditions with names matching the &quot;source&quot; readouts in question to be ignored
        during the relevant readout correlation calculations. The name of the condition and readout have to
        match for this to work.
      </p>
      <p>
        The same rules will also be applied when performing correlation between conditions. However,
        the &quot;source&quot; is now the condition and the &quot;target&quot; is the readout.
      </p>
    </div>
  ),
  logBase: `Log-transform abundance values by base 2, e or base 10. If you are applying multiple
    transformations to your data, log transformation will always occur last (after control subtraction,
    readout length normalization and condition normalization).`,
  minConditions: `A readout must pass filtering criteria for at least one condition to be
    included in the analysis. You can increase this value to apply additional stringency,
    requiring the readout to satisfy filtering criteria in more than one condition to be
    included in the analysis.`,
  parsimoniousReadoutFiltering: `All readouts that satisfy the filters for at least one
    condition will be used in the analysis. If a readout satisfies the filters
    for at least one condition, all the quantitative values for this readout – even
    those that did not satisfy the cutoff in particular condition-readout pairs -
    will also be included unless parsimonious readout filtering is enabled. When this
    option is enabled, only quantitative values that explicity pass the filters will be used.`,
  readoutAbundanceFilter: `In addition to the score filter requirement, a readout must have an abundance value
    above this parameter for at least one condition to be included in condition-condition correlation analysis. A high
    value helps to ensure that a readout is sufficiently abundant to ensure its suitability for analysis. This
    prevents low abundance readouts from skewing the analysis. This parameter should be set to a lower value for
    small datasets.`,
  readoutScoreFilter: `Only readouts that pass this cutoff will be used for the readout-readout correlation
    analysis. If a readout satisfies this cutoff for at least one condition, all quantitative values for this
    readout will be used across all conditions, even those that did not satisfy the cutoff in particular
    condition-readout pairs.`,
  useReplicates: `If an abundance column consists of a pipe-separated string of numbers (e.g. 1|4|2) then these are
    considered to be replicates. Replicates provide additional data points when calculating the correlation
    and will be used when available if this option is enabled. If disabled, any replicate information will be
    averaged prior to calculating the correlation.`,
};

export default help;
