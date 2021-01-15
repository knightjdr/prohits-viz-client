import React from 'react';

import helpCommon from './help-common';

import './help.css';

const help = {
  ...helpCommon,
  logBase: 'Log-transform axes by base 2, e or base 10.',
  minAbundance: `In addition to the score filter requirement, a readout must have an abundance
    value at or above this minimum to be included in the analysis.
    As with the score filter, once a readout passes this threshold for one condition,
    values for it are returned across both conditions.`,
  primaryFilter: (
    <div>
      <p>
        All readouts that satisfy this score filter for at least one
        condition will be displayed on the scatter plot.
      </p>
    </div>
  ),
  secondaryFilter: `Readouts that do no pass the primary score filter but
    pass this secondary filter will also be included on the image but with
    a different color. The secondary filter can be adjusted
    depending on the dataset to allow a greater or lesser number of readouts
    into this 'medium' confidence range.`,
};

export default help;
