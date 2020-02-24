import PropTypes from 'prop-types';
import React from 'react';

import Input from '../fields/input';
import Select from '../../../../components/select/select-container';
import Switch from '../fields/switch';

const CorrelationOptions = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <section>
    <h2>Correlation</h2>
    <Select
      id="correlation"
      label="Correlation method"
      onChange={handleChange}
      options={[
        { label: 'Kendall', value: 'kendall' },
        { label: 'Pearson', value: 'pearson' },
        { label: 'Spearman', value: 'spearman' },
      ]}
      value={form.correlation}
      warning={errors.correlation}
    />
    <Switch
      checked={form.ignoreSourceTargetMatches}
      helpMessage={help.ignoreSourceTargetMatches}
      helpTitle="Ignore source target pairs"
      id="ignoreSourceTargetMatches"
      label="Ignore source target pairs"
      onChange={handleChange}
    />
    <Switch
      checked={form.useReplicates}
      helpMessage={help.useReplicates}
      helpTitle="Keep replicates separate"
      id="ignoreSourceTargetMatches"
      label="Keep replicates separate"
      onChange={handleChange}
    />
    <Input
      helpMessage={help.cytoscapeCutoff}
      helpTitle="Correlation cutoff for Cytoscape output"
      id="cytoscapeCutoff"
      label="Correlation cutoff for Cytoscape output"
      onChange={handleChange}
      type="number"
      value={form.cytoscapeCutoff}
      warning={errors.cytoscapeCutoff}
    />
  </section>
);

CorrelationOptions.propTypes = {
  errors: PropTypes.shape({
    correlation: PropTypes.string,
    cytoscapeCutoff: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    correlation: PropTypes.string,
    cytoscapeCutoff: PropTypes.number,
    ignoreSourceTargetMatches: PropTypes.bool,
    useReplicates: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    cytoscapeCutoff: PropTypes.node,
    ignoreSourceTargetMatches: PropTypes.node,
    useReplicates: PropTypes.node,
  }).isRequired,
};

export default CorrelationOptions;
