import React from 'react';

import Link from '../../../components/link/text/link';

import CorrelationExample from './assets/correlation-example-min.svg';

const Correlation = () => (
  <div>
    <h2>Correlation</h2>
    <p>
      Typically, a dataset of conditions and readouts is visualized in a heat map format with
      conditions as columns and their detected readouts as rows, from which similarities and
      differences can be exposed between conditions or in the detection patterns of readouts.
      The correlation tool offers the alternative of correlating conditions and readouts
      amongst themselves and explicitly quantifying and visualizing their relationships.
    </p>
    <figure>
      <img
        alt="Example correlation visualization, shown as a heat map"
        height={431.1}
        src={CorrelationExample}
      />
      <figcaption>
        <span>An example correlation visualization</span>
        . Readouts are correlated and clustered based on their detection across conditions.
        In this example, prey proteins in a protein-protein interaction data set are correlated
        based on the baits they were detected with. Preys that behave in a correlated manner between
        baits may represent co-localizing proteins and/or be part of a complex.
      </figcaption>
    </figure>
    <p>
      Correlation between conditions is done using all significant readouts in the dataset and
      correlating conditions using the abundance measurements for those readouts. Readout correlation
      also begins by defining significant readouts based on specified filtering requirements and then
      performing pairwise correlation between the readouts across all conditions in the dataset. Replicate
      data can be used and the final correlation values will be the average between the replicates.
    </p>
    <h3>Processing steps</h3>
    <p>
      When a file is parsed by ProHits-viz it goes through several steps to determine what should
      be included on the image, how data should be transformed and how it should be arranged.
    </p>
    <h4>Data transformations</h4>
    <p>
      If desired, data can be transformed in five ways before visualization. Several of these were
      designed specifically for protein-protein interaction data sets and may not be relevant in
      many cases. These transformations are applied in the order they are listed below:
    </p>
    <ol className="help__inner-list-heading">
      <li>
        <span>control subtraction:</span>
        a control value can be subtracted from the abundance column to compute a control-subtracted
        value that better represents the detected readout above and beyond what is typically seen in
        controls. SAINT and CRAPome input files will have this option selected automatically.
        The control values should be provided as a separate column and filled with either a single number
        or a pipe-separated list of values in the case of multiple controls. For multiple controls,
        the average value will be computed and subtracted from the abundance column value. Any negative
        values after subtraction are set to zero. See the &quot;ctrlCounts&quot; column in the
        {' '}
        <Link
          to="/help/analysis/input-file#sample-files"
          visited={false}
        >
          example file
        </Link>
        {' '}
        &quot;saint-format.txt&quot; for an illustration of what this column should look like.
      </li>
      <li>
        <span>readout length normalization:</span>
        in the case were measurements are affected by the length of the readout (e.g. gene or protein
        sequence length), the abundance value can be normalized to length of the readout. The adjusted
        value of a readout is calculated by dividing the median length of all readouts in the data
        set by the length of the readout in question and then multiplying by the abundance. This will
        cause shorter readouts to have their abundance adjusted up and vice versa.
      </li>
      <li>
        <span>abundance normalization:</span>
        data is not normalized between conditions by default but it can be normalized by the total
        relative abundance between conditions or by the value of a specific readout. When a
        specific readout is selected for normalizing between conditions, it should be present in
        all conditions. If it is missing in a condition, the median value will be used in its place,
        effectively meaning that that condition&apos;s abundances will not be adjusted.
      </li>
      <li>
        <span>log transformation:</span>
        data can be log transformed by base 2, e or 10
      </li>
      <li>
        <span>simulate condition abundance:</span>
        in SAINT analysis, the prey gene readout corresponding to the bait is discarded since the
        (over)-expression of the bait and detection of those peptides makes it impossible to accurately
        determine if the bait is multimerizing with the endogenous version of itself and by how much. In some
        cases it may be desirable to have a simulated value to use in its place. The simulated value will
        be equal to the highest abundance amongst the significant preys for that bait, on the assumption
        that a protein will likely multimerize with itself at least as much as with its most abundant interactor.
      </li>
    </ol>
    <h4>Filtering</h4>
    <p>
      The readouts to include in the analysis are determined based on a primary filter and minimum abundance.
      These are set independently for condition-condition and readout-readout correlation. All readouts passing
      the filter and minimum abundance requirements for at least one condition will be considered significant
      and included in the analysis. All values for a readout across conditions will be included on the image,
      even those that are not significant, provided at least one condition passed the specified filters.
      These settings, including the type of score (i.e. are smaller or larger scores better), can be
      adjusted in the &quot;Filtering&quot; section under advanced options.
    </p>
    <h4>Correlation and clustering</h4>
    <p>
      Standard metrics are available for correlation and clustering.
    </p>
    <p>
      Replicate data can be used when calculating the correlation and will simply be treated as additional data points.
      For example, if you have three conditions with two replicates each, you can use the replicates to calculate
      readout correlation across six data points instead of three. Replicates should only be used if the same number
      are available for each condition as missing replicate values will be treated as zeros and this may heavily skew
      the correlation. To use replicate data, the abundance column should contain replicate information in a
      pipe-separated format (e.g. 1|4|2). See the
      &quot;Spec&quot; column in the
      {' '}
      <Link
        to="/help/analysis/input-file#sample-files"
        visited={false}
      >
        example file
      </Link>
      {' '}
      &quot;saint-format.txt&quot; for an illustration of what this column should look like.
    </p>
    <h3 id="output">Output</h3>
    <p>
      In the majority of cases, users will want to open the generated image in our interactive viewer
      for exploration. This will be available as soon as the analysis task completes, and clicking
      on the &quot;view&quot; button will open the image.
    </p>
    <p>
      There are several other files that are generated during analysis that may be of interest and
      are available by downloading the results folder.
    </p>
    <ul className="help__inner-list-heading">
      <li>
        <span>log.txt:</span>
        a log including all settings used for analysis
      </li>
      <li>
        <span>interactive folder:</span>
        files that can be opened with the
        {' '}
        <Link
          to="/visualization"
          visited={false}
        >
          interactive viewer
        </Link>
        {' '}
        for exploring images
      </li>
      <li>
        <span>png folder:</span>
        png versions of all images generated if the png option was selected in the &quot;Output&quot;
        section under advanced options
      </li>
      <li>
        <span>svg folder:</span>
        svg versions of all images
      </li>
      <li>
        <span>cytoscape folder:</span>
        contains plain text files for importing data into
        {' '}
        <Link to="https://cytoscape.org/">
          Cytoscape
        </Link>
        . There are files containing condition-condition and readout-readout pairs with their
        correlation values. Only those pairs passing the Cytoscape filter setting are included.
        These files can be imported into Cytoscape using the numerical values as edge-weighting
        to generate network views of the data.
      </li>
      <li>
        <span>treeview folder:</span>
        files formatted for opening images in
        {' '}
        <Link to="https://bitbucket.org/TreeView3Dev/treeview3/src/master/">
          Java TreeView
        </Link>
      </li>
      <li>
        <span>other folder:</span>
        this folder includes Newick formatted dendrograms of the clustering for conditions and
        readouts.
      </li>
    </ul>
  </div>
);

export default Correlation;
