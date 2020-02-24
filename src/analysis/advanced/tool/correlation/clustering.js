import PropTypes from 'prop-types';
import React from 'react';

import HierarchicalContainer from '../common/hierarchical-clustering-container';

const Clustering = ({
  errors,
  help,
}) => (
  <section>
    <h2>Clustering</h2>
    <HierarchicalContainer errors={errors} help={help} />
  </section>
);

Clustering.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default Clustering;
