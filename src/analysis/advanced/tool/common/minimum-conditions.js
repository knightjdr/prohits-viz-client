import PropTypes from 'prop-types';
import React from 'react';

import Input from '../fields/input';

const MinimumConditions = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <Input
    helpMessage={help.minConditions}
    helpTitle="Minimum conditions"
    id="minConditions"
    label="Minimum conditions"
    onChange={handleChange}
    min={1}
    step={1}
    type="number"
    value={form.minConditions}
    warning={errors.minConditions}
  />
);

MinimumConditions.propTypes = {
  errors: PropTypes.shape({
    minConditions: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    minConditions: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    minConditions: PropTypes.node,
  }).isRequired,
};

export default MinimumConditions;
