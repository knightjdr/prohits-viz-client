import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../components/input/text/input-text-container';
import Select from '../../../components/select/select-container';

export const defaultFieldValues = {
  background: 'all',
  fdr: 0.01,
  idType: 'refseqp',
  topPreys: 0,
};

const SaintDomainEnrich = ({
  background,
  errors,
  fdr,
  handleNumericUtilityField,
  handleStringUtilityField,
  idType,
  topPreys,
}) => (
  <>
    <p className="utility__description">
      Perform domain enrichment analysis for every bait in a SAINT .txt file. Only significant preys
      are used for the enrichment analysis and you can limit the number of preys to use for each bait
      via the &ldquo;Top preys&rdquo; input (set to 0 to use all significant preys). The background
      can either be all annotated proteins (i.e. proteins with at least one known domain), or only
      proteins/genes found in the input file. The identifier type used for the preys must also be
      specified (the identifier is used for the enrichments rather than the gene name). This utility
      is currently available for human genes only.
    </p>
    <div className="utility__inputs">
      <Input
        id="fdr"
        label="FDR for significant preys"
        max={1}
        min={0}
        onChange={handleNumericUtilityField}
        step={0.01}
        type="number"
        value={fdr}
        vertical
        warning={errors.fdr}
      />
      <Input
        id="topPreys"
        label="Top preys"
        min={0}
        onChange={handleNumericUtilityField}
        step={1}
        type="number"
        value={topPreys}
        vertical
        warning={errors.topPreys}
      />
      <Select
        id="background"
        label="Background"
        onChange={handleStringUtilityField}
        options={[
          { label: 'All annotated proteins (~19K)', value: 'all' },
          { label: 'Only proteins/genes in input file', value: 'file' },
        ]}
        placeholder="Select background..."
        value={background}
        warning={errors.background}
      />
      <div className="utility__input_medium">
        <Select
          id="idType"
          label="Prey identifier type"
          onChange={handleStringUtilityField}
          options={[
            { label: 'ENSEMBL gene (e.g. ENSG00000104375)', value: 'ensemblg' },
            { label: 'ENSEMBL protein (e.g. ENSP00000429744)', value: 'ensemblp' },
            { label: 'Entrez gene (e.g. 6788)', value: 'entrez' },
            { label: 'REFSEQ gene (e.g. NM_001256312)', value: 'refseqg' },
            { label: 'REFSEQ protein (e.g. NP_001243241)', value: 'refseqp' },
            { label: 'UniProt accession (e.g. Q13188)', value: 'uniprotacc' },
            { label: 'UniProt ID (e.g. STK3_HUMAN)', value: 'uniprotid' },
          ]}
          placeholder="Select prey identifier..."
          value={idType}
        />
      </div>
    </div>
  </>
);

SaintDomainEnrich.defaultProps = {
  errors: {},
  ...defaultFieldValues,
};

SaintDomainEnrich.propTypes = {
  background: PropTypes.string,
  errors: PropTypes.shape({
    background: PropTypes.string,
    fdr: PropTypes.string,
    idType: PropTypes.string,
    topPreys: PropTypes.string,
  }),
  fdr: PropTypes.number,
  handleNumericUtilityField: PropTypes.func.isRequired,
  handleStringUtilityField: PropTypes.func.isRequired,
  idType: PropTypes.string,
  topPreys: PropTypes.number,
};

export default SaintDomainEnrich;
