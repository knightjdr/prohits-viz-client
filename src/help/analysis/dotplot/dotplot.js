import React from 'react';
import Link from '../../../components/link/text/link';

import DistanceExample from './assets/distance-example-min.svg';
import DotplotExample from './assets/dotplot-example-min.svg';

const Dotplot = () => (
  <div>
    <h2>Dot plot</h2>
    <p>
      This tool takes quantitative information on condition-readout pairs and visualizes
      the information as a dot plot. Dot plots have the advantage over heat maps
      in that they use the same amount of space but visualize more information. In addition to raw
      quantitative values being displayed via coloured circles, dot plots display the relative
      readout measurement between conditions via circle size and confidence in the measurement via
      coloured edge. Heat maps, however, are better for presenting very large data sets as the detailed
      information of a dot plot gets lost in these instances. This tool can also generate a heat map
      by selecting the advanced option for it, or by switching from a dot plot to heat map
      view on the associated interactive viewer.
    </p>
    <figure>
      <img
        alt="Example dot plot, showing absolute and relative abundance, with edges for scoring"
        height={372}
        src={DotplotExample}
      />
      <figcaption>
        <span>An example dot plot</span>
        . Columns represent individual conditions and rows the readouts for
        which measurements are available. For protein-protein interaction data, conditions would
        be baits and readouts would be preys. The colour of each circle represents the measurement
        value (abundance, intensity, etc) and the circle size indicates the relative value
        of the readout measurement across all conditions.
      </figcaption>
    </figure>
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
        seqeunce length), the abundance value can be normalized to length of the readout. The adjusted
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
        in SAINT analysis, the prey gene readout correpsonding to the bait is discarded since the
        (over)-expression of the bait and detection of those peptides makes it impossible to accurately
        determine if the bait is dimerizing with itself and by how much. In some cases it may be desirable
        to have a simulated value to use in its place. The simulated value will be equal to the
        highest abundance amongst the significant preys for that bait, on the assumption
        that a protein will likely dimerize with itself at least as much as with its most abundant interactor.
      </li>
    </ol>
    <h4>Filtering</h4>
    <p>
      The readouts to display on the dot plot are determined based on a primary filter
      and minimum abundance. ProHits-viz assumes an FDR-like score is being used and sets
      a primary filter value of 0.01 to define significant readouts. All readouts passing this filter
      and the minimum abundance (default: 0) for at least one condition will be considered significant
      and displayed on the image. All values for a readout across conditions will be included on the image,
      even those that are not significant, provided at least one passed the specified filters.
      These settings, including the type of score (i.e. are smaller or larger scores better), can be
      adjusted in the &quot;Filtering&quot; section under advanced options.
    </p>
    <p>
      The &quot;Abundance cap&quot; and &quot;Secondary filter&quot; are not used for filtering data.
      The abundance cap sets the upper limit for the fill colour scale and the secondary filter
      defines the intermediate intensity edge. Interactions that do not pass either the primary or
      secondary filter will be marked with a low intensity edge. The secondary filter can be adjusted
      depending on the dataset to allow a greater or lesser number of interactions into this
      &quot;medium&quot; confidence range.
    </p>
    <h4>Clustering</h4>
    <p>
      Conditions and readouts are hierarchically clustered on dot plots. Different distance
      metrics and linkage methods are available. Alternatively, a
      {' '}
      <Link to="https://pubmed.ncbi.nlm.nih.gov/20571534/">
        biclustering
      </Link>
      {' '}
      method developed in the laboratory of Dr Alexey Nesvizhskii can be used. This approach first
      clusters conditions based on the similarity of their readout profiles, then pools readouts
      with similar abundances in these clusters to form a nested cluster. Note that this clustering
      approach will take significantly longer than the hierarchical clustering option, especially for
      large data sets. Data sets must have at least 3 conditions to use this option.
    </p>
    <p>
      Conditions and/or readouts can also be manually ordered. In this case, exact names must
      by supplied on the input form in the order you would like them to appear (names are case sensitive).
      Only condition and readouts specified in these lists will be included in the image.
    </p>
    <h3 id="output">Output</h3>
    <p>
      In the majority of cases, users will want to open the generated image in our interactive viewer
      for exploration. This will be available as soon as the analysis task completes and clicking
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
      </li>
      <li>
        <span>png folder:</span>
        png versions of all images if the png option was selected in the &quot;Output&quot;
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
        . There is a file containing condition-readout pairs that passed the filter criteria,
        a file of condition-condition pairs with the distances used for clustering, and
        a file of readout-readout pairs with distances. These files can be imported into
        Cytoscape using the numerical values as edge-weighting to generate network views of
        the data.
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
        readouts. Files containing the values plotted in the image, after applying all data transformations,
        will also be in this folder. There will be a file for the abundance values and a file for the
        abundance ratios. These files are formatted as a matrix, with conditions as columns and readouts
        as rows.
      </li>
    </ul>
    <h4>Optional output images</h4>
    <p>
      Condition-condition and readout-readout heat maps can be generated by this tool if the
      &quot;Generate distance plots&quot; option is selected. These are heat maps clustered in the
      same order as the main dot plot, using the distance values for filling the image.
    </p>
    <figure>
      <img
        alt="Example distance heat map"
        height={381}
        src={DistanceExample}
      />
      <figcaption>
        <span>An example readout-readout heat map</span>
        . Readouts were clustered and a heat map generated to plot the distance values. distances
        are scaled from 0 to 1.
      </figcaption>
    </figure>
  </div>
);

export default Dotplot;
