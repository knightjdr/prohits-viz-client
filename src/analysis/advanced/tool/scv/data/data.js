import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../fields/select';
import Switch from '../../fields/switch';

const Data = ({
  data,
  errors,
  form,
  handleChange,
  help,
}) => (
  <section>
    <h2>Data</h2>
    <p>
      Select data to add to the visualization in addition to the abundance
      columns to use.
    </p>
    <Select
      helpMessage={help.known}
      helpTitle="Readout knownness"
      id="known"
      label="Metric for evaluating readout knownness"
      onChange={handleChange}
      options={[
        { label: 'Interaction', value: 'interaction' },
      ]}
      value={form.known}
      warning={errors.known}
    />
    <Select
      helpMessage={help.proteinTissues}
      helpTitle="Protein expression"
      id="proteinTissues"
      label="Protein expression"
      multiple
      onChange={handleChange}
      options={data.proteinTissues}
      value={form.proteinTissues}
      warning={errors.proteinTissues}
    />
    <Select
      helpMessage={help.rnaTissues}
      helpTitle="RNA expression"
      id="rnaTissues"
      label="RNA expression"
      multiple
      onChange={handleChange}
      options={data.rnaTissues}
      value={form.rnaTissues}
      warning={errors.rnaTissues}
    />
    <Switch
      helpMessage={help.specificity}
      helpTitle="Specificity"
      checked={form.specificity}
      id="specificity"
      label="Specificity"
      onChange={handleChange}
    />
  </section>
);

Data.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    proteinTissues: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
    rnaTissues: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
  }).isRequired,
  errors: PropTypes.shape({
    known: PropTypes.string,
    proteinTissues: PropTypes.string,
    rnaTissues: PropTypes.string,
    scoreType: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    known: PropTypes.string,
    proteinTissues: PropTypes.arrayOf(PropTypes.string),
    rnaTissues: PropTypes.arrayOf(PropTypes.string),
    specificity: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    known: PropTypes.node,
    proteinTissues: PropTypes.node,
    rnaTissues: PropTypes.node,
    specificity: PropTypes.node,
  }).isRequired,
};

export default Data;
