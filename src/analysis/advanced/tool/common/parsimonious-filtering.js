import PropTypes from 'prop-types';
import React from 'react';

import Switch from '../fields/switch';

const ParsimoniousFiltering = ({
  form,
  handleChange,
  help,
}) => (
  <Switch
    helpMessage={help.parsimoniousReadoutFiltering}
    helpTitle="Parsimonious readout filtering"
    checked={form.parsimoniousReadoutFiltering}
    id="parsimoniousReadoutFiltering"
    label="Parsimonious readout filtering"
    onChange={handleChange}
  />
);

ParsimoniousFiltering.propTypes = {
  form: PropTypes.shape({
    parsimoniousReadoutFiltering: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    parsimoniousReadoutFiltering: PropTypes.node,
  }).isRequired,
};

export default ParsimoniousFiltering;
