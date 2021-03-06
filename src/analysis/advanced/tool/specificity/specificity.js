import PropTypes from 'prop-types';
import React from 'react';

import Filtering from './filter-container';
import Output from './output-container';
import SpecificityOptions from './specificity-options-container';
import Transformations from './transformations-container';

import help from '../help/help-specificity';

const AdvancedOptions = ({
  errors,
}) => (
  <div>
    <Transformations errors={errors} help={help} />
    <Filtering errors={errors} help={help} />
    <SpecificityOptions errors={errors} help={help} />
    <Output help={help} />
  </div>
);

AdvancedOptions.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

export default AdvancedOptions;
