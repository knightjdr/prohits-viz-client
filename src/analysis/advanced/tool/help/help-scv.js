import React from 'react';

import CircHeatmapKnown from './images/circheatmap-known.jpg';

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
        be selected accordingly. It will initially be applied to all metrics, but can
        be customized on a metric-by-metric basis from the interactive viewer.
      </p>
      <p>
        If the abundance value being visualization is bidirectional, i.e. it
        takes both positive and negative values, like a log
        <sub>2</sub>
        {' '}
        fold change, this cap will be applied
        at both the positive and negative ends of the scale. So a cap of 50 will cap positive
        values at 50, and negative values at -50.
      </p>
    </div>
  ),
  abundanceFilterColumn: `The name of the column to use for filtering by abundance, if desired.
    While filtering by abundance can only be applied to one column initially, it can
    be customized on a metric-by-metric basis from the interactive viewer`,
  conditionIDType: `Condition names are assumed to be gene symbols by default. The symbol
    is extracted from the condition name by grabbing everything before the first underscore. For
    example, a condition name of "STK3_OA_treated" would be converted to "STK3", and this would
    be used for retrieving information from knowledgebases. If your condition names are not symbols,
    or you are supplying a map of identifiers to use, you must specify the identifier type.`,
  conditionMapColumn: `Select a column of identifiers to use in place of condition names for
    extracting data from knowledgebases. Supported identifiers include gene symbol (STK3), Entrez gene
    ID (6788), UniProt accession (Q13188), UniProt ID (STK3_HUMAN), ENSEMBL gene ID (ENSG00000104375),
    ENSEMBL protein ID (ENSP00000429744), REFSEQ protein (NP_001243241) or REFSEQ gene (NM_001256312).`,
  conditionMapFile: `Supply a file for mapping condition names to identifiers to use for retrieving data
    from knowledgebases. The file should be tab-delimited and have two columns: 1) condition name,
    2) identifer. Condition names should be supplied exactly as they appear in the input file, i.e.
    they are case sensitive, so STK3 and stk3 would be treated differently.
    Supported identifiers include gene symbol (STK3), Entrez gene ID (6788), UniProt
    accession (Q13188), UniProt ID (STK3_HUMAN), ENSEMBL gene ID (ENSG00000104375), ENSEMBL protein ID
    (ENSP00000429744), REFSEQ protein (NP_001243241) or REFSEQ gene (NM_001256312).`,
  known: (
    <div>
      <p>
        Knowledge of expected readouts can be displayed as a partial circle around the
        heat map rings. An expected readout could be a protein known to interact with a bait, for example.
        Select a metric to use for &quot;knownness&quot; from those currently supported. To accurately quantify
        &quot;knownness&quot;, you can supply condition and readout maps for mapping the names in the input file
        to official identifiers.
      </p>
      <div className="analysis__advanced-field-modal-img">
        <img
          alt="Knownness circle surrounding heat map rings"
          height={281}
          src={CircHeatmapKnown}
        />
      </div>
    </div>
  ),
  minAbundance: (
    <div>
      <p>
        In addition to the score filter requirement, a readout must have an abundance
        value that meets this minimum to be included in the analysis. This cutoff will be
        applied to the first abundance column selected (if multiple were chosen), or the column
        specified in the &ldquo;Column for abundance filtering&rdquo; option. It can also be customized on a
        metric-by-metric basis from the interactive viewer.
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
  primaryFilter: 'Readouts must satisfy this score filter to be included in the visualization',
  proteinTissues: 'Select one or more tissues for protein expression data to include.',
  readoutIDType: `Readout names are assumed to be gene symbols by default. The symbol
    is extracted from the readout name by grabbing everything before the first underscore. For
    example, a readout name of "STK3_HUMAN" would be converted to "STK3", and this would
    be used for retrieving information from knowledgebases. If your readout names are not symbols,
    or you are supplying a map of identifiers to use, you must specify the identifier type.`,
  readoutMapColumn: `Select a column of identifiers to use in place of readout names for
    extracting data from knowledgebases. Supported identifiers include gene symbol (STK3), Entrez gene
    ID (6788), UniProt accession (Q13188), UniProt ID (STK3_HUMAN), ENSEMBL gene ID (ENSG00000104375),
    ENSEMBL protein ID (ENSP00000429744), REFSEQ protein (NP_001243241) or REFSEQ gene (NM_001256312).`,
  readoutMapFile: `Supply a file for mapping readout names to identifiers to use for retrieving data
    from knowledgebases. The file should be tab-delimited and have two columns: 1) readout name,
    2) identifer. Readout names should be supplied exactly as they appear in the input file, i.e.
    they are case sensitive, so STK3 and stk3 would be treated differently.
    Supported identifiers include gene symbol (STK3), Entrez gene ID (6788), UniProt
    accession (Q13188), UniProt ID (STK3_HUMAN), ENSEMBL gene ID (ENSG00000104375), ENSEMBL protein ID
    (ENSP00000429744), REFSEQ protein (NP_001243241) or REFSEQ gene (NM_001256312).`,
  rnaTissues: 'Select one or more tissues for RNA expression data to include.',
  specificity: `Display readout specificity as an additional circle. The specificity is calculated
    as a simple fold enrichment score for each readout and the condition it was detected with, relative
    to the entire dataset. It is only useful for datasets with multiple conditions, particularly those
    with at least ~20 conditions.`,
  verticalHeatmap: 'Generate a traditional vertical heat map in addition to the circular default.',
};

export default help;
