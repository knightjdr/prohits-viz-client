import PropTypes from 'prop-types';
import React from 'react';

import ScoreType from './score-type';

import useFormUpdate from './use-form-update';

const ScoreTypeContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <ScoreType
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

ScoreTypeContainer.propTypes = {
  errors: PropTypes.shape({
    scoreType: PropTypes.string,
  }).isRequired,
  help: PropTypes.shape({
    scoreType: PropTypes.node,
  }).isRequired,
};

export default ScoreTypeContainer;
