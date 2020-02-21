import PropTypes from 'prop-types';
import React from 'react';

import Clustering from './clustering/clustering-container';
import Display from './display-container';
import Filtering from './filtering-container';
import MinimumConditions from '../common/minimum-conditions-container';
import Output from './output-container';
import ParsimoniousFiltering from '../common/parsimonius-filtering-container';
import Transformations from '../common/transformations-container';

import help from '../help/help-dotplot';

const Dotplot = ({
  errors,
}) => (
  <div>
    <Filtering errors={errors} help={help} />
    <section>
      <h2>Data transformation</h2>
      <Transformations errors={errors} help={help} />
      <MinimumConditions errors={errors} help={help} />
      <ParsimoniousFiltering help={help} />
    </section>
    <Display errors={errors} help={help} />
    <Clustering errors={errors} help={help} />
    <Output help={help} />
  </div>
);

Dotplot.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

export default Dotplot;
