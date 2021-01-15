import PropTypes from 'prop-types';
import React from 'react';

import Control from './control-container';
import ReadoutLength from './readout-length-container';
import Normalization from './normalization-container';

const Transformations = ({
  errors,
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
  </>
);

Transformations.propTypes = {
  errors: PropTypes.shape({
    logBase: PropTypes.string,
  }).isRequired,
  help: PropTypes.shape({
    logBase: PropTypes.node,
  }).isRequired,
};

export default Transformations;
