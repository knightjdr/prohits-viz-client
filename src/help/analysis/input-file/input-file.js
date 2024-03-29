import React from 'react';

import Link from '../../../components/link/text/link';

const InputFile = () => (
  <div>
    <h2>Input file</h2>
    <p>
      Input files for analysis must be plain text in tab-delimited format with a header row
      of column names. The column names themselves are not important as their meaning can be
      specified on the input form. Each row in the file should represent a scored measurement
      for a specific condition-readout pair, for example an expression value for a gene (readout)
      in a drug-treated cell line (condition). An example file might look like:
    </p>
    <div className="help__inner-table-container">
      <table className="help__inner-table">
        <thead>
          <tr>
            <th>condition</th>
            <th>readout</th>
            <th>abundance</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>experiment1</td>
            <td>PDCD10</td>
            <td>10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>experiment1</td>
            <td>STK24</td>
            <td>7.3</td>
            <td>0.01</td>
          </tr>
          <tr>
            <td>experiment1</td>
            <td>STK25</td>
            <td>3.48</td>
            <td>0.05</td>
          </tr>
          <tr>
            <td>experiment2</td>
            <td>PDCD10</td>
            <td>12.6</td>
            <td>0</td>
          </tr>
          <tr>
            <td>experiment2</td>
            <td>STRN</td>
            <td>20.9</td>
            <td>0</td>
          </tr>
          <tr>
            <td>experiment3</td>
            <td>STK3</td>
            <td>4.11</td>
            <td>0.02</td>
          </tr>
          <tr>
            <td>experiment3</td>
            <td>STK4</td>
            <td>8</td>
            <td>0.01</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      The file can have any number of columns, but at a minimum four are required:
    </p>
    <ol
      className="help__inner-list-heading"
      id="columns"
    >
      <li>
        <span>condition:</span>
        <span>
          a column containing condition names, for example experiments, treatments
          or baits.
        </span>
      </li>
      <li>
        <span>readout:</span>
        <span>
          the readout being quantified for the associated condition, for example a gene symbol,
          protein name or accession.
        </span>
      </li>
      <li>
        <span>abundance:</span>
        <span>
          this is the quantitative measurement of interest. For mass spectrometry data it would likely
          be a spectral count or intensity value. For gene expression data it might be a TPM value. For
          CRISPR screen analysis a log
          <sub>2</sub>
          {' '}
          fold change or Z-score.
        </span>
      </li>
      <li>
        <span>score:</span>
        <span>
          a confidence metric for the abundance value, for example an FDR or p-value.
        </span>
      </li>
    </ol>
    <p>
      Missing columns can be simulated. For instance, if you do not have a score for the measurements and simply
      want to visualize everything in your input file, create a score column filled with zeroes. ProHits-viz
      will assume by default that scores are FDR-like, i.e. smaller scores are better, so a column
      of zeros will ensure that all data gets included in the analysis as a score of zero is the
      most stringent value that can be set.
    </p>
    <p>
      It is important that there are no missing values in the file, and that the abundance and score columns contain
      only numeric values. Multiple files can be selected from the file input. All files should have the same
      format, specifically the number of columns and their order.
    </p>
    <h3>Explicitly supported tools</h3>
    <p>
      Several tools generate output files that are explicitly supported by ProHits-viz. When a file
      from one of these tools is input, recommended columns and associated parameters will be automatically
      selected. Tools/websites currently supported for protein interaction data include:
    </p>
    <ul>
      <li><Link to="http://prohitsms.com">ProHits</Link></li>
      <li><Link to="http://saint-apms.sourceforge.net">SAINT</Link></li>
      <li><Link to="https://reprint-apms.org">CRAPome/REPRINT</Link></li>
      <li><Link to="http://galaxyp.org/">GalaxyP</Link></li>
    </ul>
    <p>
      The output from several CRISPR screen analysis tools are also supported although they do require a
      preprocessing step. These tools do not produce output directly comparable with our
      input format and are thus not immediately compatible with submission on our
      {' '}
      <Link to="/analysis">
        analysis
      </Link>
      {' '}
      page. We offer a utility to convert these files into a compatible format for you that can
      be found on our
      {' '}
      <Link to="/utilities">utilities</Link>
      {' '}
      page. Currently, output files from these tools can be converted into a compatible format:
    </p>
    <ul>
      <li><Link to="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-016-1015-8">BAGEL</Link></li>
      <li><Link to="https://genomemedicine.biomedcentral.com/articles/10.1186/s13073-019-0665-3">drugZ</Link></li>
      <li><Link to="https://genomebiology.biomedcentral.com/articles/10.1186/s13059-014-0554-4">MAGeCK</Link></li>
      <li><Link to="https://journals.asm.org/doi/10.1128/MCB.00302-17">RANKS</Link></li>
    </ul>
    <h3 id="sample-files">Sample files</h3>
    <p>
      Sample input files are available for
      {' '}
      <Link
        download
        to="/sample-analysis-files.zip"
      >
        download
      </Link>
      {' '}
      and contain BioID results published in
      {' '}
      <Link to="http://www.ncbi.nlm.nih.gov/pubmed/24255178">
        PMID:24255178
      </Link>
      .
    </p>
  </div>
);

export default InputFile;
