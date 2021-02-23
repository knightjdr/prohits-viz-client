import PropTypes from 'prop-types';
import React from 'react';

import Clustering from './clustering/clustering-container';
import Display from './display-container';
import Filtering from './filter-container';
import Output from './output-container';
import Transformations from './transformations-container';

import help from '../help/help-dotplot';

const AdvancedOptions = ({
  errors,
}) => (
  <div>
    <Filtering errors={errors} help={help} />
    <Transformations errors={errors} help={help} />
    <Display errors={errors} help={help} />
    <Clustering errors={errors} help={help} />
    <Output help={help} />
  </div>
);

AdvancedOptions.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

export default AdvancedOptions;
