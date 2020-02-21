import PropTypes from 'prop-types';
import React from 'react';

import Select from '../fields/select';
import Switch from '../../../../components/input/switch/switch-container';

import './common.css';

const Control = ({
  errors,
  form,
  handleChange,
  help,
  options,
}) => (
  <div className="analysis__advanced-switch-input">
    <Switch
      checked={form.ctrlSub}
      id="ctrlSub"
      label="Control subtraction"
      onChange={handleChange}
    />
    <Select
      helpMessage={help.control}
      helpTitle="Control subtraction"
      id="control"
      label="Control column"
      onChange={handleChange}
      options={options}
      value={form.control}
      warning={errors.control}
    />
  </div>
);

Control.propTypes = {
  errors: PropTypes.shape({
    control: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    control: PropTypes.string,
    ctrlSub: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    control: PropTypes.node,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      optGroup: PropTypes.bool,
      value: PropTypes.string,
    }),
  ).isRequired,
};

export default Control;
