import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../../../../../components/select/select-container';

import species from './species';

const Organism = ({
  handleChange,
  organism,
}) => (
  <Select
    label="Organism"
    onChange={handleChange}
    options={species}
    value={organism}
  />
);

Organism.propTypes = {
  handleChange: PropTypes.func.isRequired,
  organism: PropTypes.string.isRequired,
};

export default Organism;
