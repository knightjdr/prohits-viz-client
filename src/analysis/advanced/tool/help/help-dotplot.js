import React from 'react';

import Link from '../../../../components/link/text/link';

import Colours from './images/colours.jpg';
import EdgeDot from './images/edge-dot.jpg';
import FillDot from './images/fill-dot.jpg';
import Filters from './images/filters.jpg';
import MonoColours from './images/mono-colours.jpg';

import helpCommon from './help-common';

import './help.css';

const help = {
  ...helpCommon,
  abundanceCap: (
    <div>
      <p>
        Any readouts with an abundance value above this cutoff
        will be capped at this value in the output image. This is to give greater
        visual dynamic range for lower values when outlier readouts with very high
        abundance are present. This cutoff will be dependent on the data set and should
        be selected accordingly.
      </p>
      <p>
        If the abundance value being visualized is bidirectional, i.e. it
        takes both positive and negative values, like a log
        <sub>2</sub>
        {' '}
        fold change, this cap will be applied
        at both the positive and negative ends of the scale. So a cap of 50 will cap positive
        values at 50, and negative values at -50.
      </p>
    </div>
  ),
  edgeColor: (
    <div>
      <p>
        The edge colour to apply to the dot indicating the score threshold.
      </p>
      <div className="analysis__advanced-field-modal-img">
        <img
          alt="Edge indicating score threshold on dot"
          height={43}
          src={EdgeDot}
        />
      </div>
      <div className="analysis__advanced-field-modal-img">
        <img
          alt="Fill color scales"
          height={210}
          src={MonoColours}
        />
      </div>
    </div>
  ),
  fillColor: (
    <div>
      <p>
        The fill colour to apply to dots/cells indicating the abundance.
      </p>
      <div className="analysis__advanced-field-modal-img">
        <img
          alt="Fill indicating abundance on dot"
          height={43}
          src={FillDot}
        />
      </div>
      <div className="analysis__advanced-field-modal-img">
        <img
          alt="Fill color scales"
          height={300}
          src={Colours}
        />
      </div>
    </div>
  ),
  logBase: `Log-transform abundance values by base 2, e or base 10. If you are applying multiple
    transformations to your data, log transformation will always occur last (after control subtraction,
    readout length normalization and condition normalization).`,
  minAbundance: (
    <div>
      <p>
        In addition to the primary filter requirement, a readout must have an abundance
        value that meets this minimum to be included in the analysis.
        As with the primary filter, once a readout passes this threshold for one condition,
        all the values for it are returned across all conditions and used in the analysis
        unless parsimonious readout filtering is enabled.
      </p>
      <p>
        If the abundance value being visualized is bidirectional, i.e. it
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
          height={130}
          src={Filters}
        />
      </div>
    </div>
  ),
  ratioDimension: `Differences in readout abundance across conditions are transformed to ratios
    that are displayed as the circle size on dot plots. The conversion of a ratio to circle size
    can be done using either the diameter or the area of the circle. While it is more typical
    to use the area, we use the diameter by default as users tend to
    find the resulting sizes more visually representative of the underlying differences. This
    option controls the dimension used for converting the ratio to a circle size.`,
  secondaryFilter: `Readouts that do no pass the primary score filter but
    pass this secondary filter will be marked with an intermediate intensity
    edge in the dot plot. Readouts that do not pass either filter will be
    marked with a low intensity edge. The secondary filter can be adjusted
    depending on the dataset to allow a greater or lesser number of readouts
    into this 'medium' confidence range.`,
  writeDistance: `Images can also be generated showing the clustered distance
    matrices for conditions and readouts. Select this option if
    you would like to output these images as well.`,
  writeHeatmap: `Specify if you would also like a heat map version of
    the dot plot image.`,
  biclusteringApprox: (
    <div>
      <p>
        The biclustering algorithm can be significantly sped up by
        selecting the approximate biclustering option. By default, the algorithm will use
        5,000 and 10,000 for the burn-in and main iterations of the Gibbs sampler, but
        these are reduced to 50 and 500 when the approximate biclustering option is selected.
        Please see
        {' '}
        <Link to="https://www.ncbi.nlm.nih.gov/pubmed/20571534">
          Choi et al., 2010
        </Link>
        {' '}
        for further details.
      </p>
    </div>
  ),
  clustering: (
    <div>
      <p>
        Data can be clustered hierarchically or using the nested clustering (biclustering)
        approach of
        {' '}
        <Link to="https://www.ncbi.nlm.nih.gov/pubmed/20571534">
          Choi et al., 2010
        </Link>
        {' '}
        .
        The biclustering approach first clusters conditions based on the similarity of their
        readout profiles, then pools readouts with similar abundances within these clusters to form
        a nested cluster. Note that this clustering approach will take significantly longer than the
        hierarchical clustering option, especially for large data sets. At least three
        conditions are required to use the biclustering approach. It will also only work on
        non-negative abundance data, so bidirectional data, like a log
        <sub>2</sub>
        {' '}
        fold change, will not work.
      </p>
    </div>
  ),
  conditionClustering: `Dot plots with conditions appearing in an explicit order can
    be generated by selecting "Supply conditions". If selected, a list of conditions
    in the desired display order must be supplied. Only conditions entered in the text box will be
    included in the analysis and in the dot plot. Condition names must be entered
    as they appear in the input file name and are case sensitive. Names can be separated by
    a comma, space of newline. In some cases it may be desirable to only show a subset of conditions
    while clustering all readouts, or vice versa. This can be done by selecting
    "Cluster all" under the condition or readout options menu.`,
  readoutClustering: `Dot plots with readouts appearing in an explicit order can
    be generated by selecting "Supply readouts". If selected, a list of readouts
    in the desired display order must be supplied. Only readouts entered in the text box will be
    included in the analysis and in the dot plot. Condition names must be entered
    as they appear in the input file name and are case sensitive. Names can be separated by
    a comma, space of newline. In some cases it may be desirable to only show a subset of readouts
    while clustering all conditions, or vice versa. This can be done by selecting
    "Cluster all" under the readout or condition options menu.`,
};

export default help;
