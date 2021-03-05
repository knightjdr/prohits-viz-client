import React from 'react';

import Link from '../../../components/link/text/link';

import SCVexample from './assets/scv-example-min.svg';

const SCV = () => (
  <div>
    <h2>Single Condition Visualization (SCV)</h2>
    <p>
      There is often a desire to summarize information about a single condition in a
      visual manner but conventional heat maps, scatter plots and other image types are
      designed more for multi-condition comparisons. The SCV tool was engineered to satisfy
      this need for single condition visualization by creating compact circular heat maps that
      can display several pieces of information about a condition, extracted from an input file
      and, if desired, augmented by existing knowledge bases.
    </p>
    <p>
      In the example below, significant interactors for a single bait in a protein-protein interaction
      data set are visualized, showing information about their detected abundance (spectral counts),
      with protein and RNA expression from HEK 293 cells.
    </p>
    <figure>
      <img
        alt="Example single condition visualization, shown as a circular heat map"
        height={500}
        src={SCVexample}
      />
      <figcaption>
        <span>An example single condition visualization</span>
        . The significant interactions (readouts) for the bait (condition) LATS2 are shown as segments
        on a circular heat map. The segments are sorted first into known and novel interactions,
        indicated by the solid black line around the outside of the image, and then in descending order
        according to the outermost circle metric, in this case spectral counts. Data is from
        {' '}
        <Link to="http://www.ncbi.nlm.nih.gov/pubmed/24255178">
          PMID:24255178
        </Link>
        .
      </figcaption>
    </figure>
    <h3>Input data</h3>
    <p>
      The input file for this tool should conform to the
      {' '}
      <Link
        to="/help/analysis/input-file"
        visited={false}
      >
        guidelines
      </Link>
      {' '}
      outlined in a previous section of this guide. While other tools at ProHits-viz will only visualize
      a single abundance measurement column, for example as the fill colour on a dot plot, this tool can
      visualize as many values as you would like, each as a separate circle.
    </p>
    <p>
      An input file may look something like this:
    </p>
    <div className="help__inner-table-container">
      <table className="help__inner-table">
        <thead>
          <tr>
            <th>condition</th>
            <th>readout</th>
            <th>abundance</th>
            <th>fold change</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>experiment1</td>
            <td>PDCD10</td>
            <td>10</td>
            <td>5</td>
            <td>0</td>
          </tr>
          <tr>
            <td>experiment1</td>
            <td>STK24</td>
            <td>7.3</td>
            <td>3</td>
            <td>0.01</td>
          </tr>
          <tr>
            <td>experiment1</td>
            <td>STK25</td>
            <td>3.48</td>
            <td>1.3</td>
            <td>0.05</td>
          </tr>
          <tr>
            <td>experiment2</td>
            <td>PDCD10</td>
            <td>12.6</td>
            <td>10.2</td>
            <td>0</td>
          </tr>
          <tr>
            <td>experiment2</td>
            <td>STRN</td>
            <td>20.9</td>
            <td>15</td>
            <td>0</td>
          </tr>
          <tr>
            <td>experiment3</td>
            <td>STK3</td>
            <td>4.11</td>
            <td>1.8</td>
            <td>0.02</td>
          </tr>
          <tr>
            <td>experiment3</td>
            <td>STK4</td>
            <td>8</td>
            <td>3.5</td>
            <td>0.01</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      In this example, a user may wish to visualize both the abundance and fold change columns.
      The columns to visualize simply need to be selected from the input form on the
      {' '}
      <Link
        to="/analysis"
        visited={false}
      >
        analysis
      </Link>
      {' '}
      page when prompted to specify the columns to use in the file. The only requirement is that
      columns must contain numerical values.
    </p>
    <p>
      If the input file has multiple conditions, a separate image will be automatically generated for
      each.
    </p>
    <h3>Processing steps</h3>
    <p>
      When a file is parsed by ProHits-viz it goes through several steps to determine what should
      be included on the image, how data should be transformed and how it should be arranged.
    </p>
    <h4>Data transformations</h4>
    <p>
      If desired, data can be transformed in three ways before visualization. These transformations
      are applied in the order they are listed below. It is important to note that these transformations
      will only be applied to the primary abundance column (discussed in the next section on
      &quot;filtering&quot;). If transformations need to be applied to multiple columns, those most
      be done prior to inputting the file.
    </p>
    <ol className="help__inner-list-heading">
      <li>
        <span>control subtraction:</span>
        a control value can be subtracted from the primary abundance column to compute a control-subtracted
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
        sequence length), the primary abundance value can be normalized to length of the readout. The adjusted
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
    </ol>
    <h4>Filtering</h4>
    <p>
      The readouts to display on the image are determined based on a primary filter
      and minimum abundance. ProHits-viz assumes an FDR-like score is being used and sets
      a primary filter value of 0.01 to define significant readouts. All readouts passing this filter
      and the minimum abundance (default: 0) for at least one condition will be considered significant
      and displayed on the image. These settings, including the type of score (i.e. are smaller or larger
      scores better), can be adjusted in the &quot;Filtering&quot; section under advanced options.
    </p>
    <p>
      If an abundance value is chosen for filtering, the column it applies to must also be specified
      (primary abundance column). To keep things simple on this input form, we only allow filtering
      by one column at the input stage, however, filtering by multiple metrics can be done when
      working with the image in the interactive viewer.
    </p>
    <p>
      The &quot;Abundance cap&quot; ist not used for filtering data. The abundance cap sets the upper limit
      for the fill colour scale.
    </p>
    <h3>External data</h3>
    <p>
      Data from external sources can be added to the image if desired. In the example image above,
      protein and RNA expression data from third-party sources was combined with a single abundance
      value (spectral count) extracted from the input file, along with information on known interactions
      for separating readouts into two groups.
    </p>
    <p>
      Currently we offer four types of data that can be added to the image:
    </p>
    <ul className="help__inner-list-heading">
      <li>
        <span>knownness:</span>
        readouts can be sorted by &quot;knownness&quot; if desired, i.e. is the readout expected
        for the condition being visualized. Currently we only support the ability to classify readouts
        as known interactors. We intend on adding more options, as well as the ability to upload
        user-defined lists of &quot;known&quot; data in the future. Protein interaction data is merged
        from
        {' '}
        <Link to="https://thebiogrid.org">
          BioGRID
        </Link>
        {' '}
        (
        <Link to="https://pubmed.ncbi.nlm.nih.gov/33070389">
          PMID:33070389
        </Link>
        )
        and
        {' '}
        <Link to="https://www.ebi.ac.uk/intact">
          Intact
        </Link>
        {' '}
        (
        <Link to="https://pubmed.ncbi.nlm.nih.gov/24234451">
          PMID:24234451
        </Link>
        ).
      </li>
      <li>
        <span>protein expression:</span>
        data from 193 cell lines and tissues is available courtesy of
        {' '}
        <Link to="https://www.proteomicsdb.org">
          ProteomicsDB
        </Link>
        {' '}
        (
        <Link to="https://pubmed.ncbi.nlm.nih.gov/31665479">
          PMID:31665479
        </Link>
        ). Values are the log
        <sub>10</sub>
        {' '}
        normalized MS1 iBAQ intensity.
      </li>
      <li>
        <span>RNA expression:</span>
        data from 106 cell lines and tissues is available courtesy of the
        {' '}
        <Link to="https://www.proteinatlas.org">
          Human Protein Atlas
        </Link>
        {' '}
        (
        <Link to="https://pubmed.ncbi.nlm.nih.gov/25613900">
          PMID:25613900
        </Link>
        ). Values are transcripts per million (TPM).
      </li>
      <li>
        <span>specificity:</span>
        readout specificity can be calculated from the input file as described for the
        {' '}
        <Link
          to="/help/analysis/specificity"
          visited={false}
        >
          specificity tool
        </Link>
        . Typically this should only be done when the input file has at least ~20 conditions.
      </li>
    </ul>
    <p>
      Currently we only support human sources for external data. Version numbers for the databases
      will be included in the log file found in the results folder for the analysis if external data
      is added to the image.
    </p>
    <h3>Identifier mapping</h3>
    <p>
      Retrieving data from external sources is done using the names of conditions and readouts as
      supplied in the input file. The default assumption is that these will be gene symbols. Names
      are parsed to exclude anything after the first underscore found in the name. For example,
      if a condition name included information about the experiment, say &quot;STK3_OA_treated&quot;, the gene symbol
      parsed from this would be &quot;STK3&quot;. If gene symbols are not being used, that should be specified
      in the &quot;Identifier mapping&quot; section under the advanced options. Alternative identifiers can
      be supplied in two ways:
    </p>
    <ol>
      <li>
        as a separate column accompanying the primary condition or readout column with the identifier to use
      </li>
      <li>
        a two column tab-separated file, with the first column containing the condition or readout name
        and the second column the identifier
      </li>
    </ol>
    <p>
      This must be done separately for conditions and readouts and the identifier
      type must be specified. Supported identifier types include:
    </p>
    <ul>
      <li>ENSEMBL gene (e.g. ENSG00000104375)</li>
      <li>ENSEMBL protein (e.g. ENSP00000429744)</li>
      <li>Entrez gene (e.g. 6788)</li>
      <li>Gene symbol (e.g. STK3)</li>
      <li>HGNC (e.g. HGNC:11406)</li>
      <li>REFSEQ gene (e.g. NM_001256312)</li>
      <li>REFSEQ protein (e.g. NP_001243241)</li>
      <li>UniProt accession (e.g. Q13188)</li>
      <li>UniProt ID (e.g. STK3_HUMAN)</li>
    </ul>
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
        svg versions of all images. One will be generated for every condition in the input file.
      </li>
      <li>
        <span>other folder:</span>
        this folder includes the numerical data used in the images in a tabular format, and files containing
        the identifiers the condition and readout names were mapped to when retrieving data from external sources.
        The identifiers in these files are the
        {' '}
        <Link to="https://www.genenames.org/">
          HGNC
        </Link>
        {' '}
        ID.
      </li>
    </ul>
  </div>
);

export default SCV;
