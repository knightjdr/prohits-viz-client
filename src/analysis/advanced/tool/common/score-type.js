import PropTypes from 'prop-types';
import React from 'react';

import Select from '../fields/select';

const ScoreType = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <Select
    helpMessage={help.scoreType}
    helpTitle="Score type"
    id="scoreType"
    label="Score type"
    onChange={handleChange}
    options={[
      { label: 'smaller scores are better', value: 'lte' },
      { label: 'large scores are better', value: 'gte' },
    ]}
    value={form.scoreType}
    warning={errors.scoreType}
  />
);

ScoreType.propTypes = {
  errors: PropTypes.shape({
    scoreType: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    scoreType: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    scoreType: PropTypes.node,
  }).isRequired,
};

export default ScoreType;
