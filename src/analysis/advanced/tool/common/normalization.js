import PropTypes from 'prop-types';
import React from 'react';

import Input from '../fields/input';
import Select from '../fields/select';

import './common.css';

const Normalization = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <div className="analysis__advanced-select-input">
    <Select
      helpMessage={help.normalization}
      helpTitle="Normalization"
      id="normalization"
      label="Normalization"
      onChange={handleChange}
      options={[
        { label: 'none', value: 'none' },
        { label: 'Total abundance', value: 'total' },
        { label: 'Specific readout', value: 'readout' },
      ]}
      value={form.normalization}
      warning={errors.normalization}
    />
    {
      form.normalization === 'readout'
      && (
        <Input
          helpMessage={help.normalizationReadout}
          helpTitle="Readout for normalization"
          id="normalizationReadout"
          label="Readout for normalization"
          onChange={handleChange}
          type="text"
          value={form.normalizationReadout}
          warning={errors.normalizationReadout}
        />
      )
    }
  </div>
);

Normalization.propTypes = {
  errors: PropTypes.shape({
    normalization: PropTypes.string,
    normalizationReadout: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    normalization: PropTypes.string,
    normalizationReadout: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    normalization: PropTypes.node,
    normalizationReadout: PropTypes.string,
  }).isRequired,
};

export default Normalization;
