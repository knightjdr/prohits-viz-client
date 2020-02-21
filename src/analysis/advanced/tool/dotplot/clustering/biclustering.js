import PropTypes from 'prop-types';
import React from 'react';

import Switch from '../../fields/switch';

const Biclustering = ({
  form,
  handleChange,
  help,
}) => (
  <Switch
    helpMessage={help.biclusteringApprox}
    helpTitle="Approximate biclustering"
    checked={form.biclusteringApprox}
    id="biclusteringApprox"
    label="Approximate biclustering"
    onChange={handleChange}
  />
);

Biclustering.propTypes = {
  form: PropTypes.shape({
    biclusteringApprox: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    biclusteringApprox: PropTypes.node,
  }).isRequired,
};

export default Biclustering;
