import PropTypes from 'prop-types';
import React from 'react';

import Data from './data/data-container';
import Filtering from './filter-container';
import Mapping from './mapping/mapping-container';
import Output from './output-container';
import Transformations from './transformations';

import help from '../help/help-scv';

const AdvancedOptions = ({
  errors,
}) => (
  <div>
    <Transformations errors={errors} help={help} />
    <Filtering errors={errors} help={help} />
    <Data errors={errors} help={help} />
    <Mapping errors={errors} help={help} />
    <Output errors={errors} help={help} />
  </div>
);

AdvancedOptions.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

export default AdvancedOptions;
