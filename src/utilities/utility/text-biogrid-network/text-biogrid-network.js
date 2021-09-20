import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../components/input/text/input-text-container';
import Link from '../../../components/link/text/link';
import Select from '../../../components/select/select-container';
import Switch from '../../../components/input/switch/switch-container';

export const defaultFieldValues = {
  evidenceList: [],
  fdr: 0.01,
  idType: 'symbol',
  includeEvidence: false,
  includePrimaryInteractions: true,
  includeSaintInteractions: true,
  includeSecondaryInteractions: false,
  interSpeciesExcluded: false,
  isSaint: false,
  max: 10000,
  throughputTag: 'all',
};

const TextBiogridNetwork = ({
  errors,
  evidenceList,
  fdr,
  handleEvidenceListField,
  handleIncludeEvidenceField,
  handleNumericUtilityField,
  handleUtilityField,
  idType,
  includeEvidence,
  includePrimaryInteractions,
  includeSaintInteractions,
  includeSecondaryInteractions,
  interSpeciesExcluded,
  isSaint,
  max,
  throughputTag,
}) => (
  <>
    <p className="utility__description">
      {
        isSaint
          ? (
            <span>
              Retrieve known interactions for baits in a SAINT file from
              {' '}
              <Link to="https://thebiogrid.org">
                BioGRID
              </Link>
              {' '}
              and create a file for importing into
              {' '}
              <Link to="https://cytoscape.org">
                Cytoscape
              </Link>
              . By default it will also add novel preys as interactions as well. This utility
              is currently available for human genes only.
            </span>
          )
          : (
            <span>
              Retrieve known interactions for gene symbols or identifiers in a text file
              from
              {' '}
              <Link to="https://thebiogrid.org">
                BioGRID
              </Link>
              {' '}
              and create a file for importing into
              {' '}
              <Link to="https://cytoscape.org">
                Cytoscape
              </Link>
              . This utility is currently available for human genes only.
            </span>
          )
      }
    </p>
    <div className="utility__inputs">
      {
        !isSaint
        && (
          <div className="utility__input_medium">
            <Select
              id="idType"
              label="Identifier type"
              onChange={handleUtilityField}
              options={[
                { label: 'ENSEMBL gene (e.g. ENSG00000104375)', value: 'ensemblg' },
                { label: 'ENSEMBL protein (e.g. ENSP00000429744)', value: 'ensemblp' },
                { label: 'Entrez gene (e.g. 6788)', value: 'entrez' },
                { label: 'REFSEQ gene (e.g. NM_001256312)', value: 'refseqg' },
                { label: 'REFSEQ protein (e.g. NP_001243241)', value: 'refseqp' },
                { label: 'Symbol (e.g. STK3)', value: 'symbol' },
                { label: 'UniProt accession (e.g. Q13188)', value: 'uniprotacc' },
                { label: 'UniProt ID (e.g. STK3_HUMAN)', value: 'uniprotid' },
              ]}
              placeholder="Select identifier type..."
              value={idType}
            />
          </div>
        )
      }
      <div className="utility__input_medium">
        <Select
          id="evidenceList"
          label="Evidence types"
          multiple
          onChange={handleEvidenceListField}
          options={[
            'all',
            'affinity capture-luminescence',
            'affinity capture-ms',
            'affinity capture-rna',
            'affinity capture-western',
            'biochemical activity',
            'co-crystal structure',
            'co-fractionation',
            'co-localization',
            'co-purification',
            'dosage growth defect',
            'dosage lethality',
            'dosage rescue',
            'far western',
            'fret',
            'negative genetic',
            'pca',
            'phenotypic enhancement',
            'phenotypic suppression',
            'positive genetic',
            'protein-peptide',
            'protein-rna',
            'proximity label-ms',
            'reconstituted complex',
            'synthetic growth defect',
            'synthetic haploinsufficiency',
            'synthetic lethality',
            'synthetic rescue',
            'two-hybrid',
          ]}
          placeholder="Select required evidence types..."
          value={evidenceList}
        />
      </div>
      <div className="utility__input_medium">
        <Select
          id="includeEvidence"
          label="Include/exclude evidence types"
          onChange={handleIncludeEvidenceField}
          options={[
            { label: 'Only include selected evidence types', value: 'true' },
            { label: 'Exclude selected evidence types', value: 'false' },
          ]}
          placeholder="Include or exclude selected evidence types..."
          value={String(includeEvidence)}
        />
      </div>
      <Switch
        id="includePrimaryInteractions"
        label="Include primary interactions"
        onChange={handleUtilityField}
        checked={includePrimaryInteractions}
        warning={errors.includePrimaryInteractions}
      />
      <Switch
        id="includeSecondaryInteractions"
        label="Include secondary interactions"
        onChange={handleUtilityField}
        checked={includeSecondaryInteractions}
        warning={errors.includeSecondaryInteractions}
      />
      <Switch
        id="interSpeciesExcluded"
        label="Exclude inter species interactions"
        onChange={handleUtilityField}
        checked={interSpeciesExcluded}
        warning={errors.interSpeciesExcluded}
      />
      <Select
        id="throughputTag"
        label="Experimental throughput type"
        onChange={handleUtilityField}
        options={[
          { label: 'All', value: 'all' },
          { label: 'High throughput', value: 'high' },
          { label: 'Low throughput', value: 'low' },
        ]}
        placeholder="Select throughput type..."
        value={throughputTag}
      />
      <Input
        id="max"
        label="Number of interactions to retrieve"
        max={10000}
        min={0}
        onChange={handleNumericUtilityField}
        step={1}
        type="number"
        value={max}
        vertical
        warning={errors.max}
      />
      {
        isSaint
        && (
          <>
            <Switch
              id="includeSaintInteractions"
              label="Include SAINT interactions"
              onChange={handleUtilityField}
              checked={includeSaintInteractions}
              warning={errors.includeSaintInteractions}
            />
            {
              includeSaintInteractions
              && (
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
              )
            }
          </>
        )
      }
    </div>
  </>
);

TextBiogridNetwork.defaultProps = {
  errors: {},
  ...defaultFieldValues,
};

TextBiogridNetwork.propTypes = {
  errors: PropTypes.shape({
    evidenceList: PropTypes.string,
    fdr: PropTypes.string,
    idType: PropTypes.string,
    includePrimaryInteractions: PropTypes.string,
    includeSaintInteractions: PropTypes.string,
    includeSecondaryInteractions: PropTypes.string,
    interSpeciesExcluded: PropTypes.string,
    max: PropTypes.string,
    throughputTag: PropTypes.string,
  }),
  evidenceList: PropTypes.arrayOf(PropTypes.string),
  fdr: PropTypes.number,
  handleEvidenceListField: PropTypes.func.isRequired,
  handleIncludeEvidenceField: PropTypes.func.isRequired,
  handleNumericUtilityField: PropTypes.func.isRequired,
  handleUtilityField: PropTypes.func.isRequired,
  idType: PropTypes.string,
  includeEvidence: PropTypes.bool,
  includePrimaryInteractions: PropTypes.bool,
  includeSaintInteractions: PropTypes.bool,
  includeSecondaryInteractions: PropTypes.bool,
  interSpeciesExcluded: PropTypes.bool,
  isSaint: PropTypes.bool,
  max: PropTypes.number,
  throughputTag: PropTypes.string,
};

export default TextBiogridNetwork;
