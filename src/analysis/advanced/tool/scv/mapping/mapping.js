import PropTypes from 'prop-types';
import React from 'react';

import File from '../../fields/file';
import Select from '../../fields/select';

const idOptions = [
  { label: 'ENSEMBL gene ID', value: 'ensemblg' },
  { label: 'ENSEMBL protein ID', value: 'ensemblp' },
  { label: 'Gene symbol', value: 'symbol' },
  { label: 'Entrez gene ID', value: 'entrez' },
  { label: 'REFSEQ gene ', value: 'refseqg' },
  { label: 'REFSEQ protein', value: 'refseqp' },
  { label: 'UniProt accession', value: 'uniprota' },
  { label: 'UniProt ID', value: 'uniprotid' },
];

const Mapping = ({
  errors,
  form,
  handleChange,
  help,
  selectFile,
}) => (
  <section>
    <h2>Identifier mapping</h2>
    <p>
      Define how condition and readout names should be treated for retrieving information
      from knowledgebases.
    </p>
    <Select
      helpMessage={help.conditionIDType}
      helpTitle="Condition identifier type"
      id="conditionIDType"
      label="Condition identifier type"
      onChange={handleChange}
      options={idOptions}
      value={form.conditionIDType}
      warning={errors.conditionIDType}
    />
    <Select
      helpMessage={help.conditionMapColumn}
      helpTitle="Condition identifier column"
      id="conditionMapColumn"
      label="Condition identifier column"
      onChange={handleChange}
      options={form.header}
      value={form.conditionMapColumn}
      warning={errors.conditionMapColumn}
    />
    <File
      helpMessage={help.conditionMapFile}
      helpTitle="Condition mapping file"
      id="conditionMapFile"
      label="Condition mapping file"
      onChange={selectFile}
      value={form.conditionMapFile}
      warning={errors.conditionMapFile}
    />
    <Select
      helpMessage={help.readoutIDType}
      helpTitle="Readout identifier type"
      id="readoutIDType"
      label="Readout identifier type"
      onChange={handleChange}
      options={idOptions}
      value={form.readoutIDType}
      warning={errors.readoutIDType}
    />
    <Select
      helpMessage={help.readoutMapColumn}
      helpTitle="Readout identifier column"
      id="readoutMapColumn"
      label="Readout identifier column"
      onChange={handleChange}
      options={form.header}
      value={form.readoutMapColumn}
      warning={errors.readoutMapColumn}
    />
    <File
      helpMessage={help.readoutMapFile}
      helpTitle="Readout mapping file"
      id="readoutMapFile"
      label="Readout mapping file"
      onChange={selectFile}
      value={form.readoutMapFile}
      warning={errors.readoutMapFile}
    />
  </section>
);

Mapping.propTypes = {
  errors: PropTypes.shape({
    conditionIDType: PropTypes.string,
    conditionMapColumn: PropTypes.string,
    conditionMapFile: PropTypes.string,
    readoutIDType: PropTypes.string,
    readoutMapColumn: PropTypes.string,
    readoutMapFile: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    conditionIDType: PropTypes.string,
    conditionMapColumn: PropTypes.string,
    conditionMapFile: PropTypes.arrayOf(PropTypes.shape({})),
    header: PropTypes.arrayOf(PropTypes.string),
    readoutIDType: PropTypes.string,
    readoutMapColumn: PropTypes.string,
    readoutMapFile: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    conditionIDType: PropTypes.node,
    conditionMapColumn: PropTypes.node,
    conditionMapFile: PropTypes.node,
    readoutIDType: PropTypes.node,
    readoutMapColumn: PropTypes.node,
    readoutMapFile: PropTypes.node,
  }).isRequired,
  selectFile: PropTypes.func.isRequired,
};

export default Mapping;
