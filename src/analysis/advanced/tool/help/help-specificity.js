import React from 'react';

import Link from '../../../../components/link/text/link';

import Specificity from './images/specificity-fold-enrichment-metric-min.svg';

import helpCommon from './help-common';

import './help.css';

const help = {
  ...helpCommon,
  logBase: 'Log-transform axes by base 2, e or base 10.',
  minAbundance: (
    <div>
      <p>
        In addition to the score filter requirement, a readout must have an abundance
        value that meets this minimum to be included in the analysis.
        As with the score filter, once a readout passes this threshold for one condition,
        values for it are returned across both conditions.
      </p>
      <p>
        If the abundance value being visualization is bidirectional, i.e. it
        takes both positive and negative values, like a log
        <sub>2</sub>
        {' '}
        fold change, this minimum will be checked against the absolute value of the abundance.
        For example, if a minimum of 1 is set, a readout must have a value &ge; 1 or &le;
        -1, so anything between -1 and 1 will fail to meet this criterion and be excluded
        from the image.
      </p>
    </div>
  ),
  primaryFilter: (
    <div>
      <p>
        All readouts that satisfy this score filter for at least one
        condition will be displayed on the scatter plot.
      </p>
    </div>
  ),
  specificityMetric: (
    <div>
      <p>
        There are different options available for the specificity metric. The first is a simple fold
        enrichment score calculated for each readout and the condition it was detected with, relative
        to the entire dataset:
      </p>
      <div className="analysis__advanced-field-modal-img">
        <img
          alt="Fold enrichment specificity metric"
          height={46}
          src={Specificity}
          width={218}
        />
      </div>
      <p>
        where
        {' '}
        <em>
          x
          <sub>i,j</sub>
        </em>
        {' '}
        is the abundance for readout
        {' '}
        <em>j</em>
        {' '}
        relative to condition
        {' '}
        <em>i</em>
        {' '}
        and
        {' '}
        <em>N</em>
        {' '}
        is the number of conditions. The other scores are implemented as described by the
        Comparative Proteomic Analysis Software Suite (CompPASS). We would refer the user to the
        tutorial page for detailed descriptions.
      </p>
      <Link to="http://besra.hms.harvard.edu/ipmsmsdbs/cgi-bin/tutorial.cgi">
        CompPASS tutorial
      </Link>
      <ul>
        <li>
          Z-score: a readout&apos;s Z-score indicates the number of standard deviations away it is from the mean.
        </li>
        <li>
          S-score: the S-score reflects the abundance of a readout adjusted by the frequency with which it is
          found across conditions (lower frequency = higher score). Unlike the fold-enrichment and Z-scores,
          readout abundance will affect comparisons between readouts, for example if two readouts are equally
          frequent, the one with the higher abundance will receive a higher score.
        </li>
        <li>
          D-score: the D-score is calculated in the same was as the S-score, except reproducibility is
          incorporated into it, i.e. a reproducibly found readout will score higher than one that is not.
          This score should only be selected when abundance information is available for two replicates.
          It will work for more than two replicates, although the applicability of this metric is not as clear
          in that situation. This abundance column must contain the replicate values as a pipe-separated
          list. See the &quot;Spec&quot; column from the example SAINT file to see how this should be formatted.
        </li>
        <li>
          WD-score: the WD-score is a weighted D-score, that attempts to adjust the D-score to better
          recover/score frequently found readouts that show behavior typical of true positives. Like
          the D- and S-scores, readout abundance affects comparisons between readouts.
        </li>
      </ul>
    </div>
  ),
};

export default help;
