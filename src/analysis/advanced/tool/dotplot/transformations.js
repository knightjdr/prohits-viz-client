import PropTypes from 'prop-types';
import React from 'react';

import CommonTransformations from '../common/transformations-container';

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
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default Transformations;
