import React from 'react';

import Filters from './images/filters.svg';

import './help.css';

const help = {
  abundanceCap: `Any readouts with an abundance value above this cutoff
  will be capped at this value in the output image. This is to give greater
  visual dynamic range for lower values when outlier readouts with very high
  abundance are present. This cutoff will be dependent on the data set and should
  be selected accordingly.`,
  minAbundance: `In addition to the primary filter requirement, a readout must have an abundance
  value at or above this minimum to be included in the analysis.
  As with the primary filter, once a readout passes this threshold for one condition,
  all the values for it are returned across all conditions and used in the analysis.`,
  primaryFilter: (
    <div>
      <p>
        All readouts that satisfy this score filter for at least one
        condition will be displayed on the dot plot. If a readout satisfies this filter
        for at least one condition, all the quantitative values for this readout – even
        those that did not satisfy the cutoff in particular condition-readout pairs -
        will also be included unless parsimonious readout filtering is enabled. By
        default, readout confidence will be indicated with a circle edge as shown below:
      </p>
      <div className="analysis__advanced-field-modal-img">
        <img
          alt="Default filter edges"
          src={Filters}
        />
      </div>
    </div>
  ),
  scoreType: `The score type defines how the scoring system in the
  input file works, i.e. are smaller scores better that large scores, or
  vice versa?`,
  secondaryFilter: `Readouts that do no pass the primary score filter but
  pass this secondary filter will be marked with an intermediate intensity
  edge in the dot plot. Interactions that do not pass either filter will be
  marked with a low intensity edge. The secondary filter can be adjusted
  depending on the dataset to allow a greater or lesser number of readouts
  into this 'medium' confidence range.`,
};

export default help;
