import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../../../../../components/select/select-container';

import species from './species';

import './organism.css';

const Organism = ({
  handleChange,
  organism,
}) => (
  <div className="gprofiler__organism">
    <Select
      label="Organism"
      onChange={handleChange}
      options={species}
      value={organism}
    />
  </div>
);

Organism.propTypes = {
  handleChange: PropTypes.func.isRequired,
  organism: PropTypes.string.isRequired,
};

export default Organism;
