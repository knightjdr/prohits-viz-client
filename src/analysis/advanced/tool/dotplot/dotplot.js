import PropTypes from 'prop-types';
import React from 'react';

import Filtering from './filtering';


const Dotplot = ({
  errors,
  form,
  handleChange,
}) => (
  <div>
    <Filtering
      errors={errors}
      form={form}
      handleChange={handleChange}
    />
    <h2>Data transformation</h2>
  </div>
);

Dotplot.propTypes = {
  errors: PropTypes.shape({
    primaryFilter: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    primaryFilter: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Dotplot;
