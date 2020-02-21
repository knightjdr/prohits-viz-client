import PropTypes from 'prop-types';
import React from 'react';

import Select from '../fields/select';
import Switch from '../../../../components/input/switch/switch-container';

import './common.css';

const ReadoutLength = ({
  errors,
  form,
  handleChange,
  help,
  options,
}) => (
  <div className="analysis__advanced-switch-input">
    <Switch
      checked={form.readoutLengthNorm}
      id="readoutLengthNorm"
      label="Adjust by length"
      onChange={handleChange}
    />
    <Select
      helpMessage={help.readoutLength}
      helpTitle="Adjust abundance by readout length"
      id="readoutLength"
      label="Readout column"
      onChange={handleChange}
      options={options}
      value={form.readoutLength}
      warning={errors.readoutLength}
    />
  </div>
);

ReadoutLength.propTypes = {
  errors: PropTypes.shape({
    readoutLength: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    readoutLength: PropTypes.string,
    readoutLengthNorm: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    readoutLength: PropTypes.node,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      optGroup: PropTypes.bool,
      value: PropTypes.string,
    }),
  ).isRequired,
};

export default ReadoutLength;
