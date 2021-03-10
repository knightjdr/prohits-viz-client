import React from 'react';

import Link from '../../../components/link/text/link';

import SpecificityExample from './assets/specificity-example-min.svg';
import FEmetric from './assets/specificity-fold-enrichment-metric-min.svg';

const Specificity = () => (
  <div>
    <h2>Specificity</h2>
    <p>
      The specificity tool provides a means of gauging how specific readouts are to the condition
      they are detected with. A readout detected at the same level across all conditions will have
      a low specificity, while a readout found in one or a handful of conditions with a high abundance
      will have a high specificity. Specificity plots will be generated automatically for every condition
      in the dataset.
    </p>
    <figure>
      <img
        alt="Example specificity visualization, shown as a scatter plot"
        height={431}
        src={SpecificityExample}
      />
      <figcaption>
        <span>An example specificity visualization</span>
        . The significant interactors (readouts) for the bait (condition) STK4 are plotted
        with their spectral count (abundance) vs the specificity of the readout across all conditions in
        the data set. Readouts with infinite specificity are plotted with the y-value equal to the highest finite
        specificity for the condition in question. Data is from a protein-protein interaction dataset that
        can be found here:
        {' '}
        <Link to="http://www.ncbi.nlm.nih.gov/pubmed/24255178">
          PMID:24255178
        </Link>
        .
      </figcaption>
    </figure>
    <p>
      The number of conditions in the input dataset and their overall similarity will heavily influence the
      specificity score. As such, specificity scores should only be interpreted relative to the input data and
      never between separate analysis.
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
      The readouts to include in the analysis are determined from the primary filter and minimum abundance. ProHits-viz
      assumes an FDR-like score is being used and sets a primary filter value of 0.01. All readouts passing
      this filter and the minimum abundance (default: 0) for at least one of the conditions will be considered
      significant and included in the analysis. These settings, including the type of score (i.e. are smaller or
      larger scores better), can be adjusted in the &quot;Filtering&quot; section under advanced options.
    </p>
    <h3>Specificity</h3>
    <p>
      The specificity score calculated by default is a simple fold-enrichment metric, where its abundance value
      in one condition is divided by the mean from all other conditions:
    </p>
    <figure>
      <img
        alt="Fold enrichment specificity metric"
        height={55}
        src={FEmetric}
        width={261}
      />
      <figcaption>
        <span>Fold enrichment metric</span>
        . Specificity calculated as a fold-enrichment, where
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
        is the number of conditions.
      </figcaption>
    </figure>
    <p>
      We also offer specificity scores developed by the ComPASS team and refer you
      to their documentation for detailed descriptions (
      <Link to="http://besra.hms.harvard.edu/ipmsmsdbs/cgi-bin/tutorial.cgi">
        CompPASS tutorial
      </Link>
      ).
    </p>
    <h3 id="output">Output</h3>
    <p>
      In the majority of cases, users will want to open the generated images in our interactive viewer
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
        a file that can be opened with the
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
        a png version of the image if the png option was selected in the &quot;Output&quot;
        section under advanced options
      </li>
      <li>
        <span>svg folder:</span>
        an svg version of the image
      </li>
      <li>
        <span>other folder:</span>
        this folder includes a tab-delimited file with specificity values for each condition and readout
        included in the analysis
      </li>
    </ul>
  </div>
);

export default Specificity;
