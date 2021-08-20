import PropTypes from 'prop-types';
import React from 'react';

import CorrelationOptionsContainer from './corr-option-container';
import Clustering from './clustering';
import Display from './display-container';
import Filtering from './filter-container';
import Output from './output-container';
import Transformations from './transformations-container';

import help from '../help/help-correlation';

const AdvancedOptions = ({
  errors,
}) => (
  <div>
    <Transformations errors={errors} help={help} />
    <Filtering errors={errors} help={help} />
    <Display errors={errors} help={help} />
    <CorrelationOptionsContainer errors={errors} help={help} />
    <Clustering errors={errors} help={help} />
    <Output help={help} />
  </div>
);

AdvancedOptions.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

export default AdvancedOptions;
