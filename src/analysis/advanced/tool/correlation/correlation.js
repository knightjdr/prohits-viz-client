import PropTypes from 'prop-types';
import React from 'react';

import CorrelationOptionsContainer from './corr-option-container';
import Clustering from './clustering';
import Filtering from './filter-container';
import Output from './output-container';
import Transformations from './transformations-container';

import help from '../help/help-correlation';

const Correlation = ({
  errors,
}) => (
  <div>
    <Filtering errors={errors} help={help} />
    <Transformations errors={errors} help={help} />
    <CorrelationOptionsContainer errors={errors} help={help} />
    <Clustering errors={errors} help={help} />
    <Output help={help} />
  </div>
);

Correlation.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

export default Correlation;
