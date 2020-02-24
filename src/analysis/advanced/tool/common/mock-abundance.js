import PropTypes from 'prop-types';
import React from 'react';

import Switch from '../fields/switch';

import './common.css';

const MockConditionAbundance = ({
  form,
  handleChange,
  help,
}) => (
  <Switch
    checked={form.mockConditionAbundance}
    helpMessage={help.mockConditionAbundance}
    helpTitle="Simulate condition abundance"
    id="mockConditionAbundance"
    label="Simulate condition abundance"
    onChange={handleChange}
  />
);

MockConditionAbundance.propTypes = {
  form: PropTypes.shape({
    mockConditionAbundance: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    mockConditionAbundance: PropTypes.node,
  }).isRequired,
};

export default MockConditionAbundance;
