import PropTypes from 'prop-types';
import React from 'react';

import CommonTransformations from '../common/transformations';

const Transformations = ({
  errors,
  help,
}) => (
  <section>
    <h2>Data transformation</h2>
    <CommonTransformations errors={errors} help={help} />
  </section>
);

Transformations.propTypes = {
  errors: PropTypes.shape({
    logBase: PropTypes.string,
  }).isRequired,
  help: PropTypes.shape({
    logBase: PropTypes.string,
  }).isRequired,
};

export default Transformations;
