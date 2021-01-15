import PropTypes from 'prop-types';
import React from 'react';

import Filtering from './filter-container';
import Output from './output-container';
import SpecificityOptions from './specificity-options-container';
import Transformations from './transformations-container';

import help from '../help/help-specificity';

const Correlation = ({
  errors,
}) => (
  <div>
    <Filtering errors={errors} help={help} />
    <Transformations errors={errors} help={help} />
    <SpecificityOptions errors={errors} help={help} />
    <Output help={help} />
  </div>
);

Correlation.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

export default Correlation;
