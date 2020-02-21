import PropTypes from 'prop-types';
import React from 'react';

import Select from '../fields/select';
import Control from './control-container';
import ReadoutLength from './readout-length-container';
import Normalization from './normalization-container';

const Transformations = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <>
    <Control
      errors={errors}
      help={help}
    />
    <ReadoutLength
      errors={errors}
      help={help}
    />
    <Normalization
      errors={errors}
      help={help}
    />
    <Select
      helpMessage={help.logBase}
      helpTitle="Log transformation"
      id="logBase"
      label="Log transformation"
      onChange={handleChange}
      options={['none', '2', 'e', '10']}
      value={form.logBase}
      warning={errors.logBase}
    />
  </>
);

Transformations.propTypes = {
  errors: PropTypes.shape({
    logBase: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    logBase: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    logBase: PropTypes.node,
  }).isRequired,
};

export default Transformations;
