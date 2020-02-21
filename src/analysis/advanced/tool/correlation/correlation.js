import PropTypes from 'prop-types';
import React from 'react';

import MinimumConditions from '../common/minimum-conditions-container';
import ParsimoniousFiltering from '../common/parsimonius-filtering-container';
import Transformations from '../common/transformations-container';

import help from '../help/help-correlation';

const Correlation = ({
  errors,
}) => (
  <div>
    <section>
      <h2>Data transformation</h2>
      <Transformations errors={errors} help={help} />
      <MinimumConditions errors={errors} help={help} />
      <ParsimoniousFiltering help={help} />
    </section>
  </div>
);

Correlation.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

export default Correlation;
