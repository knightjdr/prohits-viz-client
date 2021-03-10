import React from 'react';

import Link from '../../../components/link/text/link';

import CCexample from './assets/cc-example-min.svg';

const CC = () => (
  <div>
    <h2>Condition-Condition</h2>
    <p>
      This tool allows the visualization of two conditions in a scatter plot
      format, with values for one condition on the x-axis and the other on the
      y-axis.
    </p>
    <figure>
      <img
        alt="Example condition-condition visualization, shown as a scatter plot"
        height={489}
        src={CCexample}
      />
      <figcaption>
        <span>An example condition-condition visualization</span>
        . The interactors (readouts) from two bait proteins (conditions)
        are visualized as a scatter plot, with points coloured based on their
        best FDR. Axes are log
        <sub>10</sub>
        -transformed. Data is from a protein-protein interaction dataset that
        can be found here:
        {' '}
        <Link to="http://www.ncbi.nlm.nih.gov/pubmed/24255178">
          PMID:24255178
        </Link>
        .
      </figcaption>
    </figure>
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
        data can be log transformed by base 2 or 10
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
      The readouts to display are determined from the secondary filter and minimum abundance. ProHits-viz
      assumes an FDR-like score is being used and sets a secondary filter value of 0.05. All readouts passing
      this filter and the minimum abundance (default: 0) for at least one of the conditions will be considered
      significant and displayed on the image. These settings, including the type of score (i.e. are smaller or
      larger scores better), can be adjusted in the &quot;Filtering&quot; section under advanced options.
    </p>
    <p>
      The &quot;Primary filter&quot; is used to define very significant readouts and these points will
      be displayed in a darker colour on the image.
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
        a file that can be opened with the
        {' '}
        <Link
          to="/visualization"
          visited={false}
        >
          interactive viewer
        </Link>
        {' '}
        for exploring the image
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
        this folder includes a tab-delimited file with the x-y values for each readout plotted on the image
      </li>
    </ul>
  </div>
);

export default CC;
